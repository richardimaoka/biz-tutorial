import { TextChunk } from "./generated/graphql";

export const splitTextChunk = (
  chunk: TextChunk,
  splitAt: number
): TextChunk[] => {
  //clone chunk but replace the .text property with substring
  const firstHalf = { ...chunk };
  if (chunk.text) {
    firstHalf.text = chunk.text.substring(0, splitAt);
  } else {
    firstHalf.text = chunk.text;
  }

  //clone chunk but replace the .text property with substring
  const secondHalf = { ...chunk };
  if (chunk.text) {
    secondHalf.text = chunk.text.substring(splitAt);
  } else {
    secondHalf.text = chunk.text;
  }

  return [firstHalf, secondHalf];
};
