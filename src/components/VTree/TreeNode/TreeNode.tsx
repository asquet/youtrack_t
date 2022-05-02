import React, { FC, KeyboardEventHandler } from "react";
import { FixedSizeNodePublicState } from "react-vtree";
import { NodeComponentProps } from "react-vtree/dist/lib/Tree";

import { TTreeData } from "../types";
import { Toggle } from "./Toggle";
import { Label } from "./Label";

import "./TreeNode.css";
import { IToggleProps } from "./Toggle/Toggle";
import { ILabelProps } from "./Label/Label";

const withKeyBoardEvent =
  (callback: () => void): KeyboardEventHandler =>
  (ev) => {
    if (ev.key === " " || ev.key === "Enter") {
      ev.preventDefault();
      return callback();
    }
  };

interface createTreeNodeProps {
  ToggleCmp?: FC<IToggleProps>;
  LabelCmp?: FC<ILabelProps>;
  className?: string;
  nestingMargin?: number;
}

export const createTreeNode = (
  props: createTreeNodeProps
): FC<NodeComponentProps<TTreeData, FixedSizeNodePublicState<TTreeData>>> => {
  const {
    ToggleCmp = Toggle,
    LabelCmp = Label,
    className = "treeNode",
    nestingMargin = 20,
  } = props;

  return ({
    data: { id, isLeaf, label, nestingLevel },
    isOpen,
    style,
    setOpen,
  }) => (
    <div
      style={{
        ...style,
      }}
      onClick={() => setOpen(!isOpen)}
      tabIndex={0}
      onKeyDown={withKeyBoardEvent(() => setOpen(!isOpen))}
    >
      <div
        style={{ marginLeft: nestingLevel * nestingMargin }}
        className={className}
      >
        <ToggleCmp isOpen={isOpen} isLeaf={isLeaf} />
        <LabelCmp label={label} />
      </div>
    </div>
  );
};
