import "./Card.css";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <Grid className="container" container gap={2}>
      {data.map((item) => (
        <Grid item className="card" key={item.id} lg={2}>
          <div className="tiles">
            <img
              src={item.image}
              alt="Album"
              style={{
                width: "100%",
                height: "100%",
                // objectFit: "cover",
              }}
            />
            <div
              style={{
                zIndex: "1",
                position: "absolute",
                top: "116px",
                width:"100%",
                height:"100%"
              }}
            >
              <h5>{item.title}</h5>
              <div className="chip">
                <Chip label={`follows: ${item.follows}`}/>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
