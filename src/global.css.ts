import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

globalStyle("button", {
  appearance: "none",
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
});
