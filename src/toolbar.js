// toolbar.js

import { Stack } from "@mui/material";
import { DraggableNode } from "./components/draggableNode";
import { NODE_TYPES } from "./nodes";

export const PipelineToolbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      gap="10px"
      sx={{
        p: 1,
        boxShadow: "0px 0px 24px 0px #00000014",
      }}
    >
      {Object.entries(NODE_TYPES).map(([key, value]) => (
        <DraggableNode
          key={key}
          type={key}
          label={value?.label}
          Icon={value.Icon}
        />
      ))}
    </Stack>
  );
};
