/* eslint-disable react/no-unescaped-entities */
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h3>Oops! The Page Cannot Be Found</h3>
          <p>We Can't Seem To Find The Page You Are Looking For</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong!</h3>
      </div>
    </Wrapper>
  )
}
export default Error
