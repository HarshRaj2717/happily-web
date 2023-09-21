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
    return (
    <>
      <div className="bb">
          <div className="container text-center p-3">
            <Typography className="m-auto mt-[30px]" level="h2" color="primary">
              Your Results
            </Typography>
            <div className="m-auto text-gray-600 text-sm">{scale_link}</div>
            <div className="m-5">
            <div className="m-auto text-black text-lg font">
            <span className="font-bold">Result : </span>{result.result} 
            </div>
            
            </div>
            <div className="my-[50px] text-sm">{result.refrences}</div>
            </div>
            </div>
    </>
        );
  } else if (scale_link == "dass-y") {
    return (
      <>
        <div className="bb">
          <div className="container text-center p-3">
            <Typography className="m-auto mt-[30px]" level="h2" color="primary">
              Your Results
            </Typography>
            <div className="m-auto text-gray-600 text-sm">{scale_link}</div>

            <div className="m-5">
            <div className="m-auto text-black text-lg font">
            <span className="font-bold">Total : </span>{result.result.total[0]}
            </div>
            <div>score : {result.result.total[1]} %</div>
            <div className="m-auto text-black text-lg font">
            <span className="font-bold">Depression : </span>{result.result.depression[0]}
            </div>
            <div>score : {result.result.depression[1]} %</div>
            <div className="m-auto text-black text-lg font">
            <span className="font-bold">Anxiety : </span>{result.result.anxiety[0]}
            </div>
            <div>score : {result.result.anxiety[1]} %</div> 
            <div className="m-auto text-black text-lg font">
            <span className="font-bold">Stress : </span>{result.result.stress[0]}
            </div>
            <div>score : {result.result.stress[1]} %</div>
            </div>

            <div className="my-[50px] text-sm">{result.refrences}</div>
            
          

          </div>
        </div>
      </>
    );
  } else {
    return( <><h1>ashutsoh</h1></>);
  }
}
