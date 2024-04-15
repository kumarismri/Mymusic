import "./Card.css";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const Card = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
  return (
    <>
      <div className="card">
        <img src="" alt="Album image" />
        <p>album name</p>
        <Stack direction="row" spacing={1}>
          {/* <Chip label="Clickable" onClick={handleClick} /> */}
          <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        </Stack>
      </div>
    </>
  );
};
