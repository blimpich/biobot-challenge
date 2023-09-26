import React from "react";
import { Box, Card } from "@mui/material";
import { Kit } from "./Kit";

export function KitCard({ kit }: Props) {
  return (
    <Card style={style}>
      <Box>
        <strong>Label:</strong> {kit.label_id}
      </Box>
      <Box>
        <strong>Tracking Code: </strong>
        <a href={FEDEX_TRACK_URL + kit.shipping_tracking_code}>
          {kit.shipping_tracking_code}
        </a>
      </Box>
    </Card>
  );
}

interface Props {
  kit: Kit;
}

const FEDEX_TRACK_URL =
  "https://www.fedex.com/fedextrack/?action=track&trackingnumber=";

const style = {
  display: "flex",
  margin: 50,
  padding: 25,
  justifyContent: "space-around",
};
