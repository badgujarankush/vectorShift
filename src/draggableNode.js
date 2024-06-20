// draggableNode.js

import { Box, Typography, useTheme } from "@mui/material";

export const DraggableNode = ({ type, label }) => {
  const theme = useTheme();

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "white",
        border: `1px solid ${theme.palette.primary.main}`,
        justifyContent: "center",
      }}
      draggable
    >
      <Typography variant="body2" color="primay.main">
        {label}
      </Typography>
    </Box>
  );
};
