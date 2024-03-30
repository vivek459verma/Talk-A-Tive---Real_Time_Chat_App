import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { MagnifyingGlass, Phone } from "phosphor-react";
import React, { useEffect, useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";

import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/Talk ‘A’ Tive.png";
import Logo1 from "../../assets/Images/Talk ‘A’ Tive (2).png";
import { Link } from "react-router-dom";
import { CallLogElement } from "../../components/CallElement";
import StartCall from "../../sections/Dashboard/StartCall";
import { useDispatch, useSelector } from "react-redux";
import { FetchCallLogs } from "../../redux/slices/app";

const Call = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCallLogs());
  }, [dispatch]);
  const { call_logs } = useSelector((state) => state.app);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}

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
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="h5">Call Log</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>

            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
            >
              <Typography variant="subtitle2" sx={{}} component={Link}>
                Start a conversation
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              sx={{
                flexGrow: 1,
                height: "100%",
                overflowY: "scroll",

                "::-webkit-scrollbar": {
                  width: "1.5px",
                },

                "::-webkit-scrollbar-track ": {
                  background:
                    theme.palette.mode === "light"
                      ? "#F8FAFF"
                      : theme.palette.background.paper,
                },

                /* Handle */
                " ::-webkit-scrollbar-thumb ": {
                  background: "#888",
                },

                /* Handle on hover */
                "::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
            >
              <Stack spacing={2.4}>
                {call_logs.map((el, idx) => {
                  return <CallLogElement key={idx} {...el} />;
                })}
              </Stack>
            </Stack>
          </Stack>
        </Box>
        {/* Right side */}

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
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
