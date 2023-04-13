import { Link, useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }
  return (
    <>
      <MainNavigation />
      <main>
        <div className="d-flex justify-content-center ">
          <div className="text-center">
            <h1 className="display-3 fw-bold">{error.status}</h1>
            <p className="fs-3">
              {' '}
              <span className="text-danger">Opps!</span> {title}
            </p>
            <p className="lead">{message}</p>
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
