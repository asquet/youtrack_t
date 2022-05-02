import { FixedSizeNodeData } from "react-vtree";

import { ITreeItem } from "../../types";

export type TTreeData = FixedSizeNodeData &
  Readonly<{
    isLeaf: boolean;
    label: string;
    nestingLevel: number;
  }>;
export type TTreeMeta = {
  node: ITreeItem;
  nestingLevel: number;
};
export type TFormattedTreeData = TTreeMeta & {
  data: TTreeData;
};
