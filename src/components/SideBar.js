// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  // const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   setToggle(false);
  //   //eslint-disable-next-line
  // }, []);

  return (
    <>
      <ul
        className={props.classes}
        // className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion  "
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fa fa-smile-o" />
          </div>
          <div className="sidebar-brand-text mx-2">Room Booking</div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fa fa-tachometer" />
            <span>Home</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline active">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={props.sidebarClick}
          ></button>
        </div>
        {/* Sidebar Message */}
        {/* <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div> */}
      </ul>
    </>
  );
};

export default SideBar;
