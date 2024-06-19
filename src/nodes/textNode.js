// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import NodeTemp from "../components/NodeTemp";
import { FIELD_TYPES } from "../constants";

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input type="text" value={currText} onChange={handleTextChange} />
//         </label>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-output`} />
//     </div>
//   );
// };

const textNodeSpecs = {
  label: "Text",
  fields: [
    {
      name: "text",
      label: "Text",
      type: FIELD_TYPES.TEXT,
      defaultValue: "{{input}}",
    },
  ],
  handles: [
    // {
    //   name: "input",
    //   label: "Input",
    //   type: "target",
    //   position: Position.Left,
    //   style: { top: "50%" },
    // },
    {
      name: "output",
      label: "Output",
      type: "source",
      position: Position.Right,
      style: { top: "50%" },
    },
  ],
};

export const TextNode = (props) => (
  <NodeTemp
    {...props}
    specs={textNodeSpecs}
    style={{
      width: 200,
      minHeight: 80,
      border: "1px solid black",
      borderRadius: "8px",
      padding: "8px",
    }}
  />
);
