import React, { useState } from 'react'
import SimpleButton from '../components/Button/SimpleButton.jsx';
import LoginUserScreen from '../screens/LoginUserScreen.jsx';
import LoginManagerScreen from '../screens/LoginManagerScreen.jsx';
import LoginAdminScreen from './LoginAdminScreen.jsx';
import Box from '@mui/material/Box';

const LoginHandlerScreen = () => {

    const [handler, setHandler] = useState(null);

    console.log(handler);
    return (
        <Box sx={{ textAlign: "center", marginTop: "100px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
                <SimpleButton color="primary" value="User Login" onclick={() => setHandler("User")} />
                <SimpleButton color="primary" value="Manager Login" onclick={() => setHandler("Manager")} />
                <SimpleButton color="primary" value="Admin Login" onclick={() => setHandler("Admin")} />
            </Box>

            {handler === "User" ? <LoginUserScreen /> : handler === "Manager" ? <LoginManagerScreen /> : handler === "Admin" ? <LoginAdminScreen /> : null}
        </Box>
    )
}

export default LoginHandlerScreen