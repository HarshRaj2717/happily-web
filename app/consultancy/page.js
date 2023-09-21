"use client";
import { useState, useEffect } from "react";
import TitleCard from "./components/titleCard";
import { getProfs } from "./js/api_calls";

export default function Consultancy() {
  const [allProfs, setAllProfs] = useState([]);

  useEffect(() => {
    async function fetchProfs() {
      const profs = await getProfs();
      setAllProfs(profs);
    }
    fetchProfs();
  }, []);

  return (
    <>
      {allProfs.map((prof, index) => (
        <TitleCard
          key={index}
          prof_id={prof.id}
          description={prof.description}
          experience_in_years={prof.experience_in_years}
          rating={prof.rating}
          verified_as={prof.verified_as}
          charge={prof.charge}
          appointment_duration_hours={prof.appointment_duration_hours}
          email={prof.email}
        />
      ))}
    </>
  );
}
