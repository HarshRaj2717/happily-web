"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { getResult } from "./getResult";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const scale_link = searchParams.get("scale_link");
  const user_res = searchParams.get("user_res");
  const [result, setResult] = useState("");

  const resultGetter = async () => {
    const api_data = await getResult(scale_link, user_res);
    if (api_data.success !== 1) return;
    setResult(api_data);
  };

  resultGetter();

  if (result === "") {
    return <></>;
  }

  if (scale_link == "gidyq-aa-male" || scale_link == "gidyq-aa-female") {
    return <></>;
  } else if (scale_link == "dass-y") {
    return <></>;
  } else {
    return <></>;
  }
}
