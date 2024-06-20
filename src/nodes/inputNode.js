// inputNode.js

import { Position } from "reactflow";
import NodeTemp from "../components/NodeTemp";
import { FIELD_TYPES } from "../constants";

const inputNodeSpecs = {
  label: "Input",
  fields: [
    {
      name: "name",
      label: "Name",
      type: FIELD_TYPES.TEXT,
      defaultValue: "Input-1",
    },
    {
      name: "type",
      label: "Type",
      type: FIELD_TYPES.SELECT,
      options: ["Text", "File"],
      defaultValue: "Text",
    },
  ],
  handles: [
    {
      name: "value",
      label: "Value",
      type: "source",
      position: Position.Right,
      style: { top: "50%" },
    },
  ],
};

export const InputNode = (props) => {
  return <NodeTemp {...props} specs={inputNodeSpecs} />;
};
