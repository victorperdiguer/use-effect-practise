import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // First iteration

  // Second and Fourth iteration

  // Third iteration

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button>+ Increase</button>
      <button>- Decrease</button>
    </div>
  )
}
