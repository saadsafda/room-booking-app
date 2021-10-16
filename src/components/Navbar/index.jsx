import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import img from "../../img/undraw_profile.svg";

const Navbar = ({ history }) => {
  const [toggle, setToggle] = useState(true);

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  useEffect(() => {
    setToggle(true);

    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <nav
        className="
        navbar navbar-expand navbar-light
        bg-white
        topbar
        mb-4
        static-top
        shadow
      "
      >
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={() => setToggle(!toggle)}
        >
          <i className="fa fa-bars" />
        </button>
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
              <img className="img-profile rounded-circle" src={img} alt="..." />
              {/* <i
                class="fa fa-user-circle rounded-circle"
              ></i> */}
            </a>
            {/* Dropdown - User Information */}
            <div
              className="
              dropdown-menu dropdown-menu-right
              shadow
              animated--grow-in
            "
              aria-labelledby="userDropdown"
            >
              <button
                className="dropdown-item"
                onClick={logOut}
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
