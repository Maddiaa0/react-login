import React from "react";

import { MdArrowBack } from "react-icons/md";

const Back = ({ click }) => {
  return (
    <div className="backArrow">
      <MdArrowBack onClick={click} />
    </div>
  );
};

export default Back;
