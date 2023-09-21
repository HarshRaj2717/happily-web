"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getResult } from "./getResult";
import { Paper, Avatar, Grid } from "@mui/material";
import Typography from "@mui/joy/Typography";
import "./Result.css";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const scale_link = searchParams.get("scale_link");
  const user_res = searchParams.get("user_res");
  const [result, setResult] = useState("");

  useEffect(() => {
    const resultGetter = async () => {
      const api_data = await getResult(scale_link, user_res);
      if (api_data.success !== 1) return;
      setResult(api_data);
    };

    resultGetter();
  }, []);

  if (result === "") {
    return <></>;
  }

  if (scale_link == "gidyq-aa-male" || scale_link == "gidyq-aa-female") {
    return <></>;
  } else if (scale_link == "dass-y") {
    return (
      <>
        <div className="bb">
          <div className="container text-center p-3">
            <Typography className="m-auto" level="h2" color="primary">
              Your Results
            </Typography>
            <div className="m-auto text-gray-600 text-sm">{scale_link}</div>
            <div className="m-auto text-black text-lg font">
              {result.result.total}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
