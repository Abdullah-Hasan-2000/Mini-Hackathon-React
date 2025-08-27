import React from 'react'
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputField from '../components/TextField/TextField.jsx'
import AuthButton from '../components/Button/AuthButton.jsx';

const LoginAdminScreen = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    }

  return (
    <Box sx={{}} >
        <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", width: "500px", margin: "auto" }}>
          <Typography variant="h4" sx={{ marginTop: "10px" }}>
            Admin Login Screen
          </Typography>
          <Typography variant="body2" sx={{ marginY: "15px" }}>
            Restaurant Management Sytem
            <br />Please login to continue.
          </Typography>
          <form onSubmit={(e)=> {
            e.preventDefault();
            handleSubmit();
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
              <InputField onchange={(e) => setEmail(e.target.value)} label="Email" autoComplete="email" type="email" />
              <InputField onchange={(e) => setPassword(e.target.value)} label="Password" type="password" autoComplete="new-password" />
            </div>
            <AuthButton color="primary" value="Login" type="submit" />
          </form>
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Don't have an account? <a href="#">Sign Up</a>
          </Typography>
        </Paper>
      </Box>
  )
}

export default LoginAdminScreen