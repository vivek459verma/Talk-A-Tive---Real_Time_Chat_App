import React from "react";
import { Container, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import Logo from "../../assets/Images/Talk ‘A’ Tive.png";
import Logo1 from "../../assets/Images/Talk ‘A’ Tive (2).png";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const AuthLayout = () => {
  const theme = useTheme();
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to={"/app"} />;
  }

  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction="column"
            alignItems={"center"}
          >
            <img
              style={{ height: 200, width: 200 }}
              src={theme.palette.mode === "light" ? Logo : Logo1}
              alt="Logo"
            />
          </Stack>
          <Outlet />
        </Stack>
      </Container>
    </>
  );
};

export default AuthLayout;
