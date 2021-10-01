import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark static-top"
      style={{ backgroundColor: "#b3d1ff", height: "70px" }}
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
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon btn-dark"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <Link
                class="nav-link active text-dark"
                aria-current="page"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item text-dark">
              <Link
                class="nav-link text-dark"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Study Guides
              </Link>
            </li>
            <li class="nav-item text-dark">
              <Link
                class="nav-link text-dark"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Gallery
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle text-dark"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Classes
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link class="dropdown-item text-dark" to="/">
                    O/L
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <Link class="dropdown-item text-dark" to="/">
                    A/L
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item text-dark">
              <Link
                class="nav-link text-dark"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Blogs
              </Link>
            </li>
            <li class="nav-item text-dark">
              <Link
                class="nav-link text-dark"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-outline-primary rounded btn-sm"
                style={{
                  fontSize: "20px",
                  margin: "10px",
                }}
                to="/"
              >
                Sign In
              </Link>
              <Link
                className="btn btn-primary rounded btn-sm"
                style={{
                  fontSize: "20px",
                  margin: "10px",
                }}
                to="/"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
