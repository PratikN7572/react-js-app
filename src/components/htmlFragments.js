import React, { useState } from "react";

const Fragment = ({ prop1, prop2 }) => {
  console.log("Fragment component initialized");
  // const [prop1, setfirst] = useState(false);
  // the components are the ui portion needed to build a higher order components that make a whole page and can be re-used.
  return (
    <div>
      <span className="">This is a text from the "Fragment" component</span>
      <br />
      <select name={prop1} id={prop2}>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default Fragment;
