import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const Inbox = (props) => {
    const [items, setItems] = useState([]);
    const [data] = useFetch('https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail.json')
    console.log(data)
    useEffect(() => {
        const loadedItems = [];
        for (const key in data) {
            if (data[key].to === 'mz360844@gmail.com'){
                loadedItems.push({
                    id: key,
                    from: data[key].from,
                    subject: data[key].subject,
                    mail: data[key].mail,
                    to: data[key].to,
                })
            }
            console.log(data[key].to)
        }
        setItems(loadedItems);
    }, [])
  return (
    <div className='p-2'>
        {items.map((data) => (
            <div key={data.id}><NavLink className='btn' to={`Read/${data.id}`}>
              <p>{data.from} {data.subject} {data.mail}</p>
            </NavLink></div>
        ))}
      </div>
  )
}

export default Inbox