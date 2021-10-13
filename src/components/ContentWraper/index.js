import React from "react";
import CaffeiBoxs from "../CaffeiBoxs";
// import MainContaent from "../MainContent";

const ContentWraper = () => {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <MainContaent /> */}
        <CaffeiBoxs />
      </div>
    </>
  );
};

export default ContentWraper;
