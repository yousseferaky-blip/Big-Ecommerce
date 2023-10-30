import { Link } from 'react-router-dom'
import   './Auth.css'

const Error403 = ({role}) => {
  return (
    <div className='text-wrapper'>
      <div className='title' data-content={404}>
        403 - ACCESS DENIED
      </div>
      <div className='subtitle '>
        Oops, You don't have permission to access this page.
        <Link to={role === '1996' ? "/dashboard/writer" : "/"} className='btn btn-warning '>
         { role === '1996' ? 'Go To Writer Page' : 'Go To Home Page' }
          </Link>
      </div>
    </div>
  )
}

export default Error403