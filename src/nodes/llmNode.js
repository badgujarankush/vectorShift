// llmNode.js

import { Handle, Position } from "reactflow";
import NodeTemp from "../components/NodeTemp";

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }

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
  return (
    <NodeTemp
      {...props}
      specs={llmNodeSpecs}
      style={{
        width: 200,
        minHeight: 80,
        border: "1px solid black",
        borderRadius: "8px",
        padding: "8px",
      }}
    />
  );
};
