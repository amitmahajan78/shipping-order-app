import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <p className="fs-1">
              <i className="bi bi-cloud-haze2-fill"></i>
            </p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/createShipment"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <p className="fs-4">Create</p>
              </NavLink>
              <NavLink
                to="/searchShipment"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <p className="fs-4">Search</p>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
