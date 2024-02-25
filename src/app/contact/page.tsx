export default function Contact(){
    return(<>
    <form className="p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold p-4 mx-auto">Contact Me</h1>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="Shuvajit" />
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Gayen" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="shuvajitgayen57@gmail.com" />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message" className="h-32"></textarea>
        </div>
        <button type="submit" className="bg-green-400 p-2 rounded-lg h-10 w-20 mx-auto">Send</button>
    </form>
    </>)
}