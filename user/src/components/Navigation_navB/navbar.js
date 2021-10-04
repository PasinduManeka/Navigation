import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark static-top"
      style={{ backgroundColor: "transparent", height: "70px" }}
    >
      <div class="container">
        <Link class="h4 navbar-brand" style={{ fontSize: "30px" }} to="/">
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
                class="nav-link links"
                aria-current="page"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link link"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Study Guides
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                style={{ fontSize: "20px", marginTop: "7px" }}
                to="/"
              >
                Gallery
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="dropbutton disabled"
                to="/"
                style={{ fontSize: "20px", marginTop: "7px" }}
              >
                Class
              </Link>
              <div class="dropdown-content">
                <Link to="/">O/L</Link>
                <Link to="/">A/L</Link>
              </div>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link link"
                style={{
                  fontSize: "20px",
                  marginTop: "7px",
                  marginLeft: "7px",
                }}
                to="/"
              >
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link link"
                style={{
                  fontSize: "20px",
                  marginTop: "7px",
                }}
                to="/"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-outline-primary rounded btn-sm "
                style={{
                  fontSize: "20px",
                  margin: "10px",
                }}
                to="/"
              >
                Sign In
              </Link>
              <Link
                className="btn btn-primary rounded btn-sm "
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
