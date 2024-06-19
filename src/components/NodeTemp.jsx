import React, { useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { FIELD_TYPES } from "../constants";

const generateDefaultValues = ({ specs, data }) => {
  let res = {};
  specs?.fields?.forEach((field) => {
    res[field.name] = data?.[field.name] || field.defaultValue;
  });
  return res;
};

const extractVariables = (text) => {
  const regex = /{{\s*(\w+)\s*}}/g;
  const variables = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    variables.add(match[1]);
  }
  return Array.from(variables);
};

const NodeTemp = ({ id, data, specs, style }) => {
  const textAreaRef = useRef(null);
  const [values, setValues] = useState(null);
  const [variableHandles, setVariableHandles] = useState([]);

  const handleFieldChange = (e) => {
    const key = e.target.name;
    const newState = { ...values, [key]: e.target.value };
    setValues(newState);
    if (key === FIELD_TYPES.TEXT) {
      const newHandles = extractVariables(newState[key]);
      setVariableHandles(newHandles);
    }
  };

  useEffect(() => {
    const res = generateDefaultValues({ data, specs });
    setValues(res);
  }, [data, specs.fields]);

  console.log({ variableHandles });

  return (
    <div className="node-container" style={style}>
      <div>
        <span className="node-label">{specs.label}</span>
      </div>
      <div>
        {specs?.fields?.map((field) => (
          <label key={field.name}>
            {field.label}:
            {field.type === FIELD_TYPES.SELECT ? (
              <select
                name={field?.name}
                value={values?.[field?.name]}
                onChange={handleFieldChange}
                aria-label={field.label}
              >
                {field.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <textarea
                ref={textAreaRef}
                name={field?.name}
                type={field?.type}
                value={values?.[field?.name]}
                onChange={handleFieldChange}
              />
            )}
          </label>
        ))}
      </div>

      {variableHandles?.map((variable, i) => {
        return (
          <Handle
            key={`${id}-${variable}`}
            type="target"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{ top: `${(i + 1) * 20}px` }}
          />
        );
      })}
      {specs?.handles?.map((handle) => {
        const { type, position, name, style } = handle;
        return (
          <Handle
            key={`${id}-${name}`}
            type={type}
            position={position}
            id={`${id}-${name}`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default NodeTemp;
