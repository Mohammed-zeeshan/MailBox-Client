import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Readmessage = () => {
    const params = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const getMessageHandler = useCallback(async() => {
        try {
            const response = await fetch(`https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail/${params.id}.json`)
            if (!response.ok){
                throw new Error('Something went wrong'); 
            }
            const data = await response.json();
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error.message);
        }
    }, [params.id])
    useEffect(() => {
        getMessageHandler()
    }, [getMessageHandler])
    const deleteHandler = async() => {
        await fetch(`https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail/${params.id}.json`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            console.log(data)
            history.replace('/Home')
        }).catch((err) => {
            alert(err.message)
        })
    }
  return (
    <section>
        <div className='border' style={{borderRadius: 15}}>
            <h3 className='p-3'>{data.subject}</h3>
        </div>
        <label>From: {data.from}</label>
        <div className='p-3 border' style={{borderRadius: 15, height: 500}} >
            <p>{data.mail}</p>
        </div>
        <button className='btn btn-danger' onClick={deleteHandler}>Delete</button>
    </section>
  )
}

export default Readmessage