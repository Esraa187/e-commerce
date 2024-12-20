import React from 'react'

function HeaderSection({title,decsription,col}) {
    return (
        <div className={`col-md-${col}`}>
            <p className='today-sale ps-4 '>{decsription}</p>
            <h2 className='fw-semibold '>{title}</h2>
        </div>
    )
}

export default HeaderSection
