// llmNode.js

import { Position } from "reactflow";
import NodeTemp from "../components/NodeTemp";

const llmNodeSpecs = {
  label: "LLM",
  desc: "This is LLM",
  handles: [
    {
      name: "system",
      label: "System",
      type: "target",
      position: Position.Left,
      style: { top: `${100 / 3}%` },
    },
    {
      name: "prompt",
      label: "Prompt",
      type: "target",
      position: Position.Left,
      style: { top: `${200 / 3}%` },
    },
    {
      name: "response",
      label: "Response",
      type: "source",
      position: Position.Right,
    },
  ],
};

export const LLMNode = (props) => {
  return <NodeTemp {...props} specs={llmNodeSpecs} />;
};
