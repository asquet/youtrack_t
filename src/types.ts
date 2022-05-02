export interface ITreeItem {
    id: string;
    label: string;
    children: ITreeItem[];
}

export type TTree = ITreeItem[];
