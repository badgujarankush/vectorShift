import { Position } from "reactflow";

export const generateDefaultValues = ({ specs, data }) => {
  let res = {};
  specs?.fields?.forEach((field) => {
    res[field.name] = data?.[field?.name] || field?.defaultValue;
  });
  return res;
};

export const generateVariableHandles = (text) => {
  const regex = /{{\s*(\w+)\s*}}/g;
  const matches = Array.from(text.matchAll(regex)).map((match) => match[1]);

  const newHandles = matches.map((match, index) => ({
    type: "target",
    position: Position.Left,
    name: match,
    label: match,
    style: { top: `${(100 / (matches.length + 1)) * (index + 1)}%` },
  }));

  return newHandles;
};
