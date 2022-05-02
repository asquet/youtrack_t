import React, { FC } from "react";

import "./Label.css";

export interface ILabelProps {
  label: string;
}

export const Label: FC<ILabelProps> = ({ label }) => {
  return (
    <div className="treeNode_label" title={label}>
      {label}
    </div>
  );
};
