import { Alert } from "@mui/material";
import React from "react";

const Error = ({message,type,closeFunc}) => {

    return(
        <Alert onClose={closeFunc} severity={type?type:"error"}>{message}</Alert>
    )
}

export default Error