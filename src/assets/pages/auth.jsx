import React from "react";
// import InputDialog from "../components/input";
import { useState, useEffect } from "react";
import Input from "../components/input3";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../firebase/firebase";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

const REDIRECT_PAGE = "/home";

//Configure FirebaseUI
const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: REDIRECT_PAGE,
  signInOption: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID],
};
function Authentication() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <div>
        <Button onClick={() => setLogin(true)}>SignIn</Button>
      </div>
      <Dialog open={login} onClose={() => setLogin(false)}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={auth}
          ></StyledFirebaseAuth>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Authentication;
