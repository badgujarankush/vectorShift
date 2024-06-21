// submit.js
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { useStore } from "../store";
import { useState } from "react";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const payload = { nodes, edges };

    const formData = new FormData();
    formData.append("pipeline", JSON.stringify(payload));

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        formData
      );
      setResult(res?.data);
    } catch (error) {
      console.error("Error", error);
      alert("Something went wrong");
    }
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      <Dialog open={!!result} onClose={() => setResult(null)}>
        <DialogTitle>Pipleline Results:</DialogTitle>
        <DialogContent sx={{ width: 300 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="Total Nodes"
                secondary={result?.num_nodes}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Total Edges"
                secondary={result?.num_edges}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Directed Acyclic Graph (DAG)"
                secondary={result?.is_dag ? "Yes" : "No"}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResult(null)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
