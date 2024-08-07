"use client";
import React from "react";
import { Paper, Avatar, Grid } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import SvgIcon from "@mui/joy/SvgIcon";
import "./titleCard.css";
import { bookProf } from "../js/api_calls";
import { useRouter } from "next/navigation";

function TitleCard({
  prof_id,
  description,
  experience_in_years,
  rating,
  verified_as,
  charge,
  appointment_duration_hours,
  email,
}) {
  const router = useRouter();
  const bookHandler = async () => {
    const appointment_id = await bookProf(
      localStorage.getItem("user_api_key"),
      prof_id
    );
    console.log(appointment_id);
    router.push(`/consultancy/${appointment_id}`);
  };

  return (
    <>
      <Grid className="bb">
        <div className="container p-4">
          <Card className="m-2 p-[15px]">
            <div className="flex gap-2">
              <Avatar></Avatar>
              <div className="flex flex-col w-[100%]">
                <Typography level="title-lg">
                  {email} ({verified_as})
                </Typography>
                <Typography className="pr-4" level="body-sm">
                  {description}
                </Typography>
                <div className="mt-5 bg-yellow-300 max-w-fit rounded-md">
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={bookHandler}
                  >
                    Book (₹{charge} for {appointment_duration_hours} hours)
                  </Button>
                </div>
              </div>

              <div>
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={rating} readOnly />
                <Typography component="legend">
                  Experience: {experience_in_years} Years
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    "& > button": { borderRadius: "2rem" },
                  }}
                >
                  <IconButton size="sm" variant="plain" color="neutral">
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                  <IconButton size="sm" variant="plain" color="neutral">
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                        />
                        <path
                          fill="currentColor"
                          d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                  <IconButton size="sm" variant="plain" color="neutral">
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                </Box>
              </div>
            </div>
          </Card>
        </div>
      </Grid>
    </>
  );
}

export default TitleCard;
