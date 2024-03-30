import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

import { Link, useSearchParams } from "react-router-dom";
import ChatComponent from "./Conversation";
import Chats from "./Chats";
import Contact from "../../sections/Dashboard/Contact";
import Logo from "../../assets/Images/Talk ‘A’ Tive.png";
import Logo1 from "../../assets/Images/Talk ‘A’ Tive (2).png";
import { useSelector } from "react-redux";
import StarredMessages from "../../sections/Dashboard/StarredMessages";
import Media from "../../sections/Dashboard/SharedMessages";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();

  const theme = useTheme();

  const { sideBar, room_id, chat_type } = useSelector((state) => state.app);
  const isSideBarOpen = sideBar && sideBar.open;

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: isSideBarOpen
              ? `calc(100vw - 740px )`
              : "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom: searchParams.get("type") === "individual-chat",
          }}
        >
          {chat_type === "individual" && room_id !== null ? (
            <ChatComponent />
          ) : (
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
          )}
        </Box>
        {isSideBarOpen &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages />;

              case "SHARED":
                return <Media />;

              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
