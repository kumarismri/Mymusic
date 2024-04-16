import "./Card.css";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <div className="container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.image}
            alt="Album"
            style={{ width: "50px", height: "100px" }}
          />
          <h5>{item.title}</h5>
          <Chip label={item.follows} />
        </div>
      ))}
    </div>
  );
};
