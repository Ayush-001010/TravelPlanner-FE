import React from "react";
import type ILearning from "./ILearning";
import NestedComponent from "./NestedComponent/NestedComponent";
// import Toast from "./Toast/Toast";

const Learning: React.FC<ILearning> = () => {
  return (
    <div>
      {/* <Toast /> */}
      <NestedComponent/>
    </div>
  );
};

export default Learning;