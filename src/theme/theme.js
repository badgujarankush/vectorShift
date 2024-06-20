import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9061c6",
      light: "rgb(166, 128, 209)",
      dark: "rgb(100, 67, 138)",
      hover: "#f8f2ff",
    },
    secondary: {
      main: "#f50057",
    },
    grey: {
      100: "#DEE1E6",
      200: "#707683",
      300: "#90A0B7",
      400: "#b2b2b2",
    },
    black: {
      100: "#323C47",
      200: "#192A3E",
      700: "#000000",
    },
    blue: {
      50: "#EBF2FC",
      100: "#C2CFE099",
      125: "#DEEAFA",
      150: "#F4F4F6",
      700: "#1890FF",
      900: "#109CF1", // accent blue
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid #E6E8F0",
          borderColor: "#E6E8F0",
          "&: hover": {
            outline: "none",
          },
        },
        input: {
          "&: hover": {
            outline: "none",
          },
          internal: {
            autofill: {
              selected: {
                backgroundColor: "white",
              },
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          ".MuiTableCell-root": {
            color: "#374151",
          },
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
          maxWidth: 450,
        },
        arrow: {
          color: "white",
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  shadowsReverse: [
    "none",
    "0px -1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px -1px 2px rgba(100, 116, 139, 0.12)",
    "0px -1px 4px rgba(100, 116, 139, 0.12)",
    "0px -1px 5px rgba(100, 116, 139, 0.12)",
    "0px -1px 6px rgba(100, 116, 139, 0.12)",
    "0px -2px 6px rgba(100, 116, 139, 0.12)",
    "0px -3px 6px rgba(100, 116, 139, 0.12)",
    "0px -2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px -5px 12px rgba(100, 116, 139, 0.12)",
    "0px -5px 14px rgba(100, 116, 139, 0.12)",
    "0px -5px 15px rgba(100, 116, 139, 0.12)",
    "0px -6px 15px rgba(100, 116, 139, 0.12)",
    "0px -7px 15px rgba(100, 116, 139, 0.12)",
    "0px -8px 15px rgba(100, 116, 139, 0.12)",
    "0px -9px 15px rgba(100, 116, 139, 0.12)",
    "0px -10px 15px rgba(100, 116, 139, 0.12)",
    "0px -12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px -13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px -14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px -10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
  ],
});
