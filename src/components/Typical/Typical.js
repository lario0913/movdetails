import React from 'react'
import Typical from 'react-typical'
import './Typical.css'

function Typicall() {
    return (
        <div className='typical'>
            <Typical
                steps={
                    [
                        'WELCOME TO MOVDETAILS', 1500, 
                        'Search for Information about Movies', 1000, 
                        'Get Details of Series in Seconds', 500
                    ]
                }
                loop={Infinity}
                wrapper="p"
            />
        </div>
    )
}

export default Typicall
