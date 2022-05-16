import React from 'react'
import spinner from '../../assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt20'>
      <img
        src={spinner}
        alt='Loading...'
        width={180}
        className='text-center mx-auto'
        // style={{ width: '180px', margin: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default Spinner
