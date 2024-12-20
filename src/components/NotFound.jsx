import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='container spaces'>
      <div className="row">
        <div className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='notfound'>404 Not Found</h1>
        <p className='mt-4'>Your visited page not found. You may go home page.</p>
        <Link to='/home'><button className='notfound-btn'>Back to home page</button></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
