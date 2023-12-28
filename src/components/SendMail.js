import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';

const SendMail = (props) => {
    const [items, setItems] = useState([]);
    const emailsHandler = useCallback(async() => {
        try {
            const response = await fetch('https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail.json')
        if (!response.ok){
            throw new Error('Something went wrong'); 
        }
        const data = await response.json();
        const loadedItems = [];
        for (const key in data) {
            if (data[key].from === props.mail){
                loadedItems.push({
                    id: key,
                    from: data[key].from,
                    subject: data[key].subject,
                    mail: data[key].mail,
                    to: data[key].to,
                })
            }
        }
        setItems(loadedItems);
        }
        catch(err) {
            console.log(err.message);
        }
    }, [props.mail])
    useEffect(() => {
        emailsHandler();
    }, [emailsHandler])
  return (
    <section>
        <Header />
        <div className='row bg-success-subtle'>
            <div className='col-1 mt-2 bg-success-subtle w-25' style={{width: 400, height: 645, borderRadius: 8}}>
            <nav className='nav flex-column'>
                <li className='nav-item p-3'><NavLink className='btn btn-primary' to="/Compose">Compose</NavLink></li>
                <li className='nav-item pb-2 ps-3'><NavLink className='btn' to='/Home'>Inbox</NavLink></li>
                <li className='nav-item pb-2 ps-3'><NavLink className='btn' to='/SendMail'>Sent Box</NavLink></li>
            </nav>
            </div>
            <div className='col-9 mt-2' >
                <div className='p-2 bg-light' style={{height: 645, borderRadius: 5}}>
                    {items.map((data) => (
                        <ul className='list-group' key={data.id}><NavLink className='btn' to={`Read/${data.id}`}>
                        <li className='list-group-item text-start'>{data.to} {data.subject} {data.mail}</li>
                        </NavLink></ul>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default SendMail