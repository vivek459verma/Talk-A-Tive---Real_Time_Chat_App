import React, { useEffect } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../../sections/Dashboard/Settings/ProfileForm";
import { useDispatch } from "react-redux";
import { FetchUserProfile } from "../../../redux/slices/app";
import Logo from "../../../assets/Images/Talk ‘A’ Tive.png";
import Logo1 from "../../../assets/Images/Talk ‘A’ Tive (1).png";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Profile = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(FetchUserProfile());
  }, [dispatch]);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left Pane */}
        <Box
          sx={{
            height: "100vh",
            width: 320,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>

              <Typography variant="h5">Profile</Typography>
            </Stack>

            {/* Profile Edit Form */}
            <ProfileForm />
          </Stack>
        </Box>

        {/* Right Pane */}
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px )",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
          }}
        >
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <img
              src={theme.palette.mode === "light" ? Logo : Logo1}
              alt="chat app logo"
            />
            <Typography variant="subtitle2">
              Select a Chat or start a{" "}
              <Link
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
                to="/"
              >
                New Conversation
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
