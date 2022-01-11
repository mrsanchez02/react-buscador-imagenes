import React from 'react'

const Error = ({mensaje}) => {
    return (
        // <p className='bg-danger text-light text-center py-2'>{mensaje}</p>
        <p className='my-3 p-4 text-center alert alert-primary'>{mensaje}</p>
    )
}

export default Error
