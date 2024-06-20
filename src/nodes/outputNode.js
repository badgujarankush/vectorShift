// outputNode.js
import { Position } from "reactflow";
import NodeTemp from "../components/NodeTemp";
import { FIELD_TYPES } from "../constants";

const outputNodeSpecs = {
  label: "Output",
  fields: [
    {
      name: "name",
      label: "Name",
      type: FIELD_TYPES.TEXT,
      defaultValue: "Output-1",
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
      type: "target",
      position: Position.Left,
      style: { top: "50%" },
    },
  ],
};

export const OutputNode = (props) => {
  return <NodeTemp {...props} specs={outputNodeSpecs} />;
};
