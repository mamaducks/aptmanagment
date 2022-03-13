import {
    createTheme,
    responsiveFontSizes,
  } from "@mui/material/styles";
  
  const theme = responsiveFontSizes(
    createTheme({
      // spacing: 3,
      // palette: {
      //   background: {
      //     default: "#e8e8e9",
      //   },
  
      //   primary: {
      //     main: "#0c2948",
      //   },
  
      //   secondary: {
      //     main: "#5e1686", //purple
      //   },
      //   error: {
      //     main: "#D72A2A", //red
      //   },
      //   warning: {
      //     main: "#FC7B09", //orange
      //   },
      //   info: {
      //     main: "#6B7D6A", //gray
      //   },
      //   success: {
      //     main: "#09FE00", //green
      //   },
      //   text: {
      //     primary: "#032c56", //dark blue/black
  
      //     secondary: "#0a131c",
      //   },
      // },
  
      // typography: {
      //   allVariants: {
      //     color: "#4b4c4e",
      //   },
      //   fontFamily: [
      //     "Montserrat",
      //     "Quicksand",
      //     "Catamaran",
      //     "Raleway",
      //     "Source Sans Pro",
      //     "sans-serif",
      //   ].join(","),
  
      //   h3: {
      //     color: "#313234",
      //   },
      //   h4: {
      //     color: "#3a3b3c",
      //   },
      //   h5: {
      //     color: "#3a3b3c",
      //   },
      //   h6: {
      //     color: "#3a3b3c",
      //   },
  
      //   subtitle1: {
      //     color: "#0a131c",
      //   },
  
      //   caption: {
      //     color: "#827e85",
      //   },
  
      //   custom: {
      //     listView: {
      //       start: {
      //         display: "flex",
      //         justifyContent: "flex-end",
      //       },
      //     },
      //   },
      // },
      props: {
        MuiButton: {
          variant: "contained",
          size: "large",
        },
      },
  
      components: {
      //   MuiCard: {
      //     styleOverrides: {
      //       root: {
      //         display: "flex",
      //         flexDirection: "column",
      //       },
      //     },
      //   },
      //   MuiCardHeader: {
      //     styleOverrides: {
      //       title: {
      //         color: "#041e62",
      //       },
      //     },
      //   },
      //   MuiCardMedia: {
      //     styleOverrides: {
      //       root: {
      //         objectFit: "fill",
      //         paddingBottom: 1,
      //       },
      //     },
      //   },
      //   MuiPaper: {
      //     styleOverrides: {
      //       root: {
      //         backgroundColor: "#eff1f3",
      //       },
      //     },
      //   },
      //   MuiAvatar: {
      //     styleOverrides: {
      //       colorDefault: {
      //         color: "#c9915b",
      //         backgroundColor: "#103964",
      //       },
      //       root: {},
      //     },
      //   },
      //   MuiFormControlLabel: {
      //     styleOverrides: {
      //       root: {
      //         color: "#103964",
      //       },
      //     },
      //   },
      //   MuiFormGroup: {
      //     styleOverrides: {
      //       root: {
      //         marginLeft: 7,
      //       },
      //     },
      //   },
      //   MuiFormLabel: {
      //     styleOverrides: {
      //       root: {
      //         color: "#c36d00",
      //       },
      //     },
      //   },
      //   MuiListItemText: {
      //     styleOverrides: {
      //       primary: {
      //         color: "#171818",
      //         fontWeight: 700,
      //       },
  
      //       secondary: "",
      //     },
      //   },
  
      //   MuiBox: {
      //     styleOverrides: {
      //       root: {
      //         backgroundColor: "#f3f3f3",
      //       },
      //     },
      //   },
  
      //   MuiLink: {
      //     styleOverrides: {
      //       root: {
      //         textDecoration: "none",
      //         color: "primary",
      //         "&:hover": {
      //           color: "#c36d00",
      //         },
      //       },
      //     },
      //   },
      //   MuiSelect: {
      //     styleOverrides: {
      //       root: {
      //         background: "#f7f7f7",
      //         borderRadius: 5,
      //         minWidth: 10,
      //         marginTop: 3,
      //       },
      //     },
      //   },
      //   MuiButtonBase: {
      //     styleOverrides: {
      //       root: {
      //         height: "fit-content",
      //       },
      //     },
      //   },
  
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
          // styleOverrides: {
          //   root: {
          //     color: "#f1f1f1",
  
          //     backgroundColor: "primary",
          //     "&:hover": {
          //       backgroundColor: "#578bc1",
          //     },
          //   },
          //   text: {
          //     color: "#103964",
          //     fontSize: 16,
          //     "&:hover": {
          //       backgroundColor: "#f1f1f1",
          //     },
            // },
          // },
        },
        MuiButtonGroup: {
          defaultProps: {
            variant: "contained",
          },
        },
  
      //   MuiChip: {
      //     defaultProps: {
      //       variant: "contained",
      //       color: "primary",
      //     },
      //   },
      //   MuiListItemIcon: {
      //     styleOverrides: {
      //       root: {
      //         color: "#103964",
      //       },
      //     },
      //   },
  
      //   MuiIconButton: {
      //     styleOverrides: {
      //       root: {
      //         color: "#fbfbfb",
      //       },
      //     },
      //   },
      },
    })
  );
  
  export default theme;