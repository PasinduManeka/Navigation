import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark static-top"
      style={{ backgroundColor: "#b3d1ff" }}
    >
      <div class="container">
        <Link
          class="h4 navbar-brand text-dark"
          style={{ fontSize: "30px" }}
          to="/"
        >
          NavBar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-bs-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <Link
                class="nav-link active text-dark t"
                aria-current="page"
                style={{ fontSize: "30px" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item text-dark">
              <Link
                class="nav-link text-dark"
                style={{ fontSize: "30px" }}
                to="/"
              >
                Link
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle text-dark"
                style={{ fontSize: "30px" }}
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link class="dropdown-item text-dark" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item text-dark" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <Link class="dropdown-item text-dark" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <div className="form-row">
              <div className="col">
                <div class="md-form">
                  <Link className="btn btn-outline-primary" to="/">
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="md-form">
                  <Link className="btn btn-primary" to="/">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
