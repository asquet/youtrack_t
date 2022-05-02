import { ITreeItem, TTree } from "../../types";
import { useCallback } from "react";
import { TreeWalker } from "react-vtree";
import { TFormattedTreeData, TTreeData, TTreeMeta } from "./types";

export const formatTree = (
  item: ITreeItem,
  nestingLevel: number
): TFormattedTreeData => ({
  data: {
    id: item.id,
    isOpenByDefault: false,
    isLeaf: item.children.length === 0,
    label: item.label,
    nestingLevel,
  },
  node: item,
  nestingLevel,
});

export const useTreeWalker = (tree: TTree) => {
  return useCallback(
    function* treeWalker(): ReturnType<TreeWalker<TTreeData, TTreeMeta>> {
      for (let node of tree) {
        yield formatTree(node, 0);
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      while (true) {
        const parentMeta = yield;

        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < parentMeta.node.children.length; i++) {
          yield formatTree(
            parentMeta.node.children[i],
            parentMeta.nestingLevel + 1
          );
        }
      }
    },
    [tree]
  );
};
