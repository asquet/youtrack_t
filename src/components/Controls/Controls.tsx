import React, { ChangeEvent, FC, useState } from "react";
import { TTree } from "../../types";
import { treeCreator } from "./tree-creator";

interface IControlsProps {
  onTreeCreated: (tree: TTree | null) => void;
}

const inputNumberSetter =
  (f: (value: number) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    f(Number(e.target.value));
  };

const inputBoolSetter =
  (f: (value: boolean) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    f(e.target.checked);
  };

const inputStringSetter =
  (f: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    f(e.target.value);
  };

export const Controls: FC<IControlsProps> = ({ onTreeCreated }) => {
  const [depth, setDepth] = useState(1);
  const [width, setWidth] = useState(10);
  const [text, setText] = useState("item");

  const [randomize, setRandomize] = useState(false);

  const onCreateTree = () => {
    onTreeCreated(treeCreator(width, depth, randomize, text));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <label>
          Depth
          <input
            value={depth}
            onChange={inputNumberSetter(setDepth)}
            type="number"
          />
        </label>
        <br />
        <label>
          Width
          <input
            value={width}
            onChange={inputNumberSetter(setWidth)}
            type="number"
          />
        </label>
      </div>
      <div>
        <label>
          Text
          <input
            value={text}
            onChange={inputStringSetter(setText)}
            type="text"
          />
        </label>
        <br />
        <label>
          Randomize
          <input
            checked={randomize}
            onChange={inputBoolSetter(setRandomize)}
            type="checkbox"
          />
        </label>
        <br />
        <button onClick={onCreateTree}>Create tree</button>
      </div>
    </div>
  );
};
