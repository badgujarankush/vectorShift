import React, { useEffect, useRef, useState } from "react";
import {
  Autocomplete,
  Box,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Handle, useUpdateNodeInternals } from "reactflow";
import { FIELD_TYPES } from "../constants";
import { useStore } from "../store";
import { generateDefaultValues, generateVariableHandles } from "../utils";

const NodeTemp = ({ id, data, specs, style = {} }) => {
  const { edges } = useStore();
  const theme = useTheme();
  const { label, Icon, fields, desc } = specs;
  const updateNodeInternals = useUpdateNodeInternals();
  const textAreaRef = useRef(null);
  const [values, setValues] = useState(null);
  const [handles, setHandles] = useState([]);

  const handleFieldChange = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);
    if (key === FIELD_TYPES.TEXT) {
      const newHandles = generateVariableHandles(value);
      setHandles((prev) => [...specs?.handles, ...newHandles]);
    }
  };

  useEffect(() => {
    updateNodeInternals(id);
  }, [handles]);

  useEffect(() => {
    if (data) {
      const res = generateDefaultValues({ data, specs });
      setValues(res);
      setHandles(specs?.handles);
    }
  }, [data, specs]);

  const isConnected = (handleId) => {
    return edges.some(
      (el) => el.sourceHandle === handleId || el.targetHandle === handleId
    );
  };

  return (
    <Stack className="node-container" style={style}>
      <Stack gap={1} mb={1}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Icon sx={{ fontSize: 16, color: "primary.main" }} />
          <Typography className="node-label">{label}</Typography>
        </Stack>
        {desc && <Typography fontSize={12}>{desc}</Typography>}
      </Stack>

      <Stack gap={1}>
        {fields?.map((field, i) => (
          <Box key={i}>
            {field.type === FIELD_TYPES.SELECT ? (
              <Autocomplete
                size="small"
                options={field?.options}
                id={field?.name}
                value={values?.[field?.name] || null}
                onChange={(e, value) => {
                  handleFieldChange(field?.name, value);
                }}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props}>
                    <Typography variant="subtitle2">{option}</Typography>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={field?.label}
                    variant="outlined"
                  />
                )}
              />
            ) : (
              <TextField
                size="small"
                variant="outlined"
                label={field?.label}
                multiline
                minRows={1}
                fullWidth
                ref={textAreaRef}
                id={field?.name}
                type={field?.type}
                value={values?.[field?.name]}
                onChange={(e) => handleFieldChange(field?.name, e.target.value)}
              />
            )}
          </Box>
        ))}
      </Stack>

      {handles?.map((handle, index) => {
        const { type, position, name, style } = handle;
        const handleId = `${id}-${name}`;
        const connected = isConnected(handleId);
        return (
          <Handle
            key={handleId}
            type={type}
            position={position}
            id={handleId}
            style={{
              ...style,
              border: connected
                ? "1px solid white"
                : `1px solid ${theme.palette.primary.main}`,
              background: connected ? theme.palette.primary.main : "white",
            }}
          />
        );
      })}
    </Stack>
  );
};

export default NodeTemp;
