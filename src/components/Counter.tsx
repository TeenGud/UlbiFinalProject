import { useState } from "react"
import * as classNames from './Counter.module.scss'

export const Counter = () => {
    const [ count, setCount ] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className={classNames.btn}>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
