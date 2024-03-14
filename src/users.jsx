import { useEffect, useState } from "react"

export default function Users(){
    const [users, setsuers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setsuers(data)) 
    },[])
    return (
        <div>
            <h3>users:{users.length} </h3>

        </div>
    )
}