import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Compose = (props) => {
    const toInputRef = useRef();
    const subjectInputRef = useRef();
    const mailInputRef = useRef();
    const history = useHistory();
    const sendHandler = async(event) => {
        event.preventDefault();
        const enteredFrom = props.mail;
        const enteredTO = toInputRef.current.value;
        const enteredSubject = subjectInputRef.current.value;
        const enteredMail = mailInputRef.current.value;
        const data = {
            from: enteredFrom,
            to: enteredTO,
            subject: enteredSubject,
            mail: enteredMail,
        }
        await fetch('https://mailbox-dc43d-default-rtdb.firebaseio.com/Mail.json',{
            method: 'POST',
            body: JSON.stringify(data),
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
        <form>
            <div className='p-1'>
                <label>To</label>
                <input type='email' className='form-control bg-primary-subtle' ref={toInputRef} placeholder='example@gmail.com' required />
            </div>
            <div className='p-1'>
                <input type='text' className='form-control bg-primary-subtle' placeholder='Subject' ref={subjectInputRef} required />
            </div>
            <div className='p-1'>
                <textarea className='form-control bg-primary-subtle' placeholder='Compose email' ref={mailInputRef} rows={18} required></textarea>
                {/* <Editor
                 toolbarClassName="toolbarClassName"
                 wrapperClassName="wrapperClassName"
                 editorClassName="editorClassName ps-3"
                 placeholder="Compose email"
                 editorRef={setEditorReference}
                /> */}
            </div>
            <div style={{flexDirection: 'row'}}>
                <button className='btn btn-primary'  onClick={sendHandler}>Send</button>
            </div>
        </form>
    </section>
  )
}

export default Compose;