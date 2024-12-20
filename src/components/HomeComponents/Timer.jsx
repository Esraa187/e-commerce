import React from 'react'

function Timer() {
    return (
        <div className="col-md-4 sale-time">
            <div>
                <p className='m-0'>Days</p>
                <h2 className='fw-semibold'>03</h2>
            </div>
            <span>:</span>
            <div>
                <p className='m-0'>Hours</p>
                <h2 className='fw-semibold'>23</h2>
            </div>
            <span>:</span>
            <div>
                <p className='m-0'>Minutes</p>
                <h2 className='fw-semibold'>19</h2>
            </div>
            <span>:</span>
            <div>
                <p className='m-0'>Seconds</p>
                <h2 className='fw-semibold'>56</h2>
            </div>
        </div>
    )
}

export default Timer
