import { TTree } from "../../types";

export const treeCreator = (
  initialWidth: number,
  initialDepth: number,
  random: boolean,
  text: string = "item"
): TTree | null => {
  if (Math.pow(initialWidth, initialDepth + 1) > 200000) {
    alert("Tree is too big");
    return null;
  }
  const actualDepth = random
    ? 1 + Math.floor(Math.random() * initialDepth)
    : initialDepth;
  let counter = 0;

  const builder = (width: number, depth: number, random: boolean): TTree => {
    const actualWidth = random
      ? Math.round(width * Math.random() + 0.5)
      : width;

    return Array(actualWidth)
      .fill(null)
      .map(() => ({
        id: String(++counter), // questionable trick
        label: text + " " + counter,
        children: depth > 0 ? builder(width, depth - 1, random) : [],
      }));
  };

  return builder(initialWidth, actualDepth, random);
};
