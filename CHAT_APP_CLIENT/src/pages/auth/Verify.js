import { Link as RouterLink } from "react-router-dom";
// sections
import { Stack, Typography, Link } from "@mui/material";
// import AuthSocial from "../../sections/auth/AuthSocial";
// import Login from "../../sections/auth/LoginForm";
import VerifyForm from "../../sections/auth/VerifyForm";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Verify OTP - Talk 'A' Tive</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Already A User?</Typography>
          <Link to="/auth/login" component={RouterLink} variant="subtitle2">
            Login
          </Link>
        </Stack>
      </Stack>
      {/* Form */}
      <VerifyForm />
    </>
  );
}
