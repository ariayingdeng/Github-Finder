import React from 'react'

function About() {
  return (
    <div className='container'>
      <h2 className='text-5xl mb-4'>Github Finder</h2>
      <p className='mb-4 text-2xl font-light'>
        A React App to search Github profiles and see profile details. This
        project is part of the{' '}
        <a href='https://www.udemy.com/course/react-front-to-back-2022/'>
          {' '}
          React Front To Back 2022
        </a>{' '}
        Udemy course by <strong>Brad Traversy</strong>.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>Layout By: Hassib Moddasser</p>
    </div>
  )
}

export default About
