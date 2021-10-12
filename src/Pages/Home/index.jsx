import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";

const HomeLayout = (props) => {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
