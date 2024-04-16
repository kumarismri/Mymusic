import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";

export const Apicall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Card data={data} /> */}
      {data.length > 0 && <Card data={data} />}
    </div>
  );
};
