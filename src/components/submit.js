// submit.js
import axios from "axios";
import { Button } from "@mui/material";
import { useStore } from "../store";
import { useState } from "react";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const payload = { nodes, edges };

    try {
      const res = await axios.post(
        "http://localhost:8000/pipelines/parse",
        payload
      );
      const data = res.data;
      setResult(data);
      alert(
        `Number of Nodes: ${data.num_nodes}, Number of Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error("Failed to fetch:", error);
      alert("Failed to fetch data from server.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
