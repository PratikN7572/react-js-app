import React from "react";

const Custom = ({ styleProps, classProps, id }) => {
  console.log("custom component initialized");
  // the components are the ui portion needed to build a higher order components that make a whole page and can be re-used.
  return (
    <div>
      <span style={styleProps} className={classProps} id={id}>
        This is hello frddom sddcustom component
      </span>
    </div>
  );
};

export default Custom;
