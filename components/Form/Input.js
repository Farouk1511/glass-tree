import { TextField } from "@mui/material";
import React from "react";


const Input = ({id,label,placeholder,onChange,type,multiline,rows}) => {

    return (
        <TextField
        sx={{
          width: "60%",
          marginBottom: 5,
          borderWidth: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: 2, borderRadius: 0 },
          },
        }}
        required
        id={id}
        label={label}
        multiline={multiline}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        rows={rows}
      />  
    )
}

export default Input