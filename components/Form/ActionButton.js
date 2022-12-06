import { Button } from "@mui/material";
import React from "react";

const ActionButton = ({actionName,handleSubmit}) => {

    return (
        <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "60%",
          fontWeight: 600,
          fontFamily: "rockwell",
          borderRadius: 0,
        }}
        onClick={handleSubmit}
      >
        {actionName}
      </Button>
    )
}

export default ActionButton