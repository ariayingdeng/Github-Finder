import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import warning from '../../assets/warning-erro.png'

function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && (
          <img src={warning} alt="warning" width={50} />
        )}
        <p className='flex-1 text-base font-semibold mt-3 text-white'>
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  )
}

export default Alert
