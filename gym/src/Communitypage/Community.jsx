import React from "react";

import Customerreview from "./Customerreview";
import Communityinvolment from "./Communityinvolment";
import Eventcollabratation from "./Eventcollabratation";
import "./Community.css";

const Community = () => {
  return (
    <>
     
      <div className="community-container">
        <Customerreview />
        <Communityinvolment />
        <Eventcollabratation />
      </div>
    
    </>
  );
};

export default Community;
