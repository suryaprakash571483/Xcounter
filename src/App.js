import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleIncreament = () => (
        setCount(count + 1)
    )

    const handleDecreament = () => (
        setCount(count - 1)
    )

  return (
    <div className='d-flex justify-content-start align-items-center' style={{height: "100vh"}}>
        <div>
          <h1>Counter App</h1>
        <p className='text-center style={{fontSize: "70px"'>count: {count}</p>
            <div className='d-flex'>
                <button onClick={handleIncreament} className='btn btn-success me-3'>Increment</button>
                
                <button onClick={handleDecreament} className='btn btn-danger ms-3'>Decrement</button>
            </div>
        </div>
                
    </div>
                
  )
}
