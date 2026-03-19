'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Admin Error:', error)
  }, [error])

  return (
    <div style={{ padding: '20px', color: 'red' }}>
      <h2>Admin Panel Error</h2>
      <button onClick={() => reset()}>Try again</button>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  )
}
