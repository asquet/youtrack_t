import React, { FC } from "react";
import { FixedSizeTree as Tree } from "react-vtree";
import AutoSizer from "react-virtualized-auto-sizer";

import { TTree } from "../../types";
import { useTreeWalker } from "./use-tree-walker";
import { createTreeNode } from "./TreeNode";

interface IVTreeProps {
  tree: TTree;
}

const TreeNode = createTreeNode({});
const ITEM_SIZE = 30;

export const VTree: FC<IVTreeProps> = (props: { tree: TTree }) => {
  // destructure props
  const treeWalker = useTreeWalker(props.tree);

  return (
    <AutoSizer disableWidth>
      {({ height }) => (
        <Tree
          treeWalker={treeWalker}
          itemSize={ITEM_SIZE}
          height={height}
          width="100%"
        >
          {TreeNode}
        </Tree>
      )}
    </AutoSizer>
  );
};
