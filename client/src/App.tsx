import React, { useState } from "react";
import "./App.css";
import { KitSearch } from "./KitSearch";
import { Kit } from "./Kit";
import { KitCard } from "./KitCard";
import { Box } from "@mui/material";

export default function App() {
  const [kit, setKit] = useState<Kit>();

  return (
    <Box style={appStyle}>
      <Box style={headerStyle}>
        <img
          alt="BioBot logo"
          src="https://biobot.io/wp-content/themes/biobot/assets/img/iso-white.svg"
          style={{ marginRight: 10 }}
        />
        <h1>Kit Search</h1>
      </Box>
      <Box style={searchContainer}>
        <KitSearch setKit={setKit} />
      </Box>

      {kit ? <KitCard kit={kit} /> : null}
    </Box>
  );
}

const BIOBOT_BLUE = "#161B2A";
const BABY_BLUE = "#00A4FF";
const YELLOW = "#FDCD47";
const GRAY = "#F7F8FD";

const appStyle = {
  height: "100vh",
  backgroundColor: GRAY,
};

const headerStyle = {
  backgroundColor: BIOBOT_BLUE,
  display: "flex",
  color: "white",
  justifyContent: "center",
};

const searchContainer = {
  color: BABY_BLUE,
  margin: 50,
};
