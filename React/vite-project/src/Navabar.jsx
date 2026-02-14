import { useState } from "react"

function Navbar(){

    const [count,setCount] = useState(0)

    return(
        <div>
            <h1>Hello World !!!</h1>
            {/* <button onClick={() => setCount((count) => count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount((count) => count - 1)}>-</button> */}
        </div>
    )
}

export default Navbar