// textNode.js

import { Position } from "reactflow";
import NodeTemp from "../components/NodeTemp";
import { FIELD_TYPES } from "../constants";

const textNodeSpecs = {
  label: "Text",
  fields: [
    {
      name: "text",
      label: "Text",
      type: FIELD_TYPES.TEXT,
      defaultValue: "Text Value",
    },
  ],
  handles: [
    {
      name: "output",
      label: "Output",
      type: "source",
      position: Position.Right,
      style: { top: "50%" },
    },
  ],
};

export const TextNode = (props) => {
  return <NodeTemp {...props} specs={textNodeSpecs} />;
};
