'use client'
import { useState } from "react"

export default function Contact(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [error,setError]=useState('');
    

    async function submit(e:any){
        e.preventDefault();

        

        // console.log('First Name:',firstName)
        // console.log('Last NAme:',lastName)
        // console.log('email:',email)
        // console.log('Message:',message)

        await fetch('/api/contact',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                message,
            }),
        });

        
    };
    return(<>
    <form 
    onSubmit={submit}
    className="p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold p-4 mx-auto">Contact Me</h1>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            type="text" placeholder="Shuvajit" />
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            type="text" placeholder="Gayen" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" placeholder="shuvajitgayen57@gmail.com" />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            id="message" placeholder="Type your message" className="h-32"></textarea>
        </div>
        <button type="submit" className="bg-green-400 p-2 rounded-lg h-10 w-20 mx-auto">Send</button>
    </form>
    </>)
}