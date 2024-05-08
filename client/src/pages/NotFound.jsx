import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404 - Not Found</h1>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="mt-3">
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  );
}
