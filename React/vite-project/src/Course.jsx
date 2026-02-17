import { useState } from "react"
import JPG from './assets/react.svg'
const course1 = 'HTML'

function Course(){
    const [count,setCount] = useState(0)
    const style = {
        backgroundColor:'green',
        color : 'white'
    }
    return(
        <section>
            <div className="card">
                <img src={JPG} alt="" />
                <h3>{course1}</h3>
                <p>This is HTML</p> 
            </div>
            <div>
                <button className="btn" onClick={() => setCount((count) => count + 1)}>+</button>
                <p>{count}</p>
                <button className="btn" onClick={() => setCount((count) => count - 1)}>-</button>
            </div>
        </section>
    )
}

export default Course