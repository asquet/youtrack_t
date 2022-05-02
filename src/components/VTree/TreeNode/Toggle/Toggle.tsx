import React, { FC } from "react";

import "./Toggle.css";
import chevron from "./chevron.svg";

export interface IToggleProps {
  isOpen: boolean;
  isLeaf: boolean;
}

export const Toggle: FC<IToggleProps> = ({ isOpen, isLeaf }) => {
  return (
    <div
      className={
        "treeNode_toggle " +
        (isOpen ? "treeNode_toggle__open" : "treeNode_toggle__closed")
      }
    >
      {!isLeaf && <img src={chevron} alt="Toggle item" />}
    </div>
  );
};
