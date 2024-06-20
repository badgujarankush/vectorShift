import { Position } from "reactflow";
import InputIcon from "@mui/icons-material/Input";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OutputIcon from "@mui/icons-material/Output";
import DescriptionIcon from "@mui/icons-material/Description";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { FIELD_TYPES, NODE } from "../constants";

export const NODE_TYPES = {
  [NODE.INPUT]: {
    label: "Input",
    Icon: InputIcon,
    fields: [
      {
        name: "name",
        label: "Name",
        type: FIELD_TYPES.TEXT,
        defaultValue: "Input-1",
      },
      {
        name: "type",
        label: "Type",
        type: FIELD_TYPES.SELECT,
        options: ["Text", "File"],
        defaultValue: "Text",
      },
    ],
    handles: [
      {
        name: "value",
        label: "Value",
        type: "source",
        position: Position.Right,
        style: { top: "50%" },
      },
    ],
  },
  [NODE.LLM]: {
    label: "LLM",
    Icon: AutoAwesomeIcon,
    desc: "This is LLM",
    fields: [
      {
        name: "text",
        label: "text",
        type: FIELD_TYPES.TEXT,
        defaultValue: "llm-1",
      },
    ],
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
  },
  [NODE.OUTPUT]: {
    label: "Output",
    Icon: OutputIcon,
    fields: [
      {
        name: "name",
        label: "Name",
        type: FIELD_TYPES.TEXT,
        defaultValue: "Output-1",
      },
      {
        name: "type",
        label: "Type",
        type: FIELD_TYPES.SELECT,
        options: ["Text", "File"],
        defaultValue: "Text",
      },
    ],
    handles: [
      {
        name: "value",
        label: "Value",
        type: "target",
        position: Position.Left,
        style: { top: "50%" },
      },
    ],
  },
  [NODE.TEXT]: {
    label: "Text",
    Icon: DescriptionIcon,
    fields: [
      {
        name: "text",
        label: "Text",
        type: FIELD_TYPES.TEXT,
        defaultValue: "Text Value",
      },
    ],
    handles: [
      {
        name: "output",
        label: "Output",
        type: "source",
        position: Position.Right,
        style: { top: "50%" },
      },
    ],
  },
  [NODE.NOTE]: {
    label: "Note",
    Icon: SpeakerNotesIcon,
    fields: [
      {
        name: "text",
        label: "Text",
        type: FIELD_TYPES.TEXT,
        defaultValue: "Note bla bla",
      },
    ],
    handles: [
      {
        name: "input",
        label: "Input",
        type: "target",
        position: Position.Left,
        style: { top: "50%" },
      },
      {
        name: "output",
        label: "Output",
        type: "source",
        position: Position.Right,
        style: { top: "50%" },
      },
    ],
  },
  [NODE.INTEGRATION]: {
    label: "Integration",
    Icon: SwapHorizIcon,
    fields: [
      {
        name: "app",
        label: "App",
        type: FIELD_TYPES.SELECT,
        options: ["Gmail", "Whatsapp", "Instagram"],
        default: "Gmail",
      },
    ],
    handles: [
      {
        name: "input",
        label: "Input",
        type: "target",
        position: Position.Left,
        style: { top: "50%" },
      },
      {
        name: "output",
        label: "Output",
        type: "source",
        position: Position.Right,
        style: { top: "50%" },
      },
    ],
  },
};
