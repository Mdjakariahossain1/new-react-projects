import { useState } from "react"

export default function Counter() {
    const [count, setcount] = useState(0);

    const handleAdd = () =>{
        const newcount = count + 1;
        setcount(newcount)
    }
    const handleAdda = () =>{
        const newcount = count - 1;
        setcount(newcount)
    }
    return (
        <div style={{border: '2px solid red', borderRadius:'15px'}}>
            <h3>centar: {count}</h3>
            <button onClick={handleAdd}>add</button>
           
            <button onClick={handleAdda}>menes</button>
        </div>

    )
}