import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-5 bg-base-200 text-secondary-focus footer-center'>
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
