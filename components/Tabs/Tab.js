import { Box, Tabs,Tab as MuiTab  } from "@mui/material";
import React, { useState } from "react";

const Tab = ( ) => {

    const [value,setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue,event.target.textContent)
      };
    const tabs = ['Services','Jobs']

    return (
        <Box sx={{width:'100%'}}>   
            <Tabs value={value} onChange={handleChange} centered >
            {tabs.map((tab,index) => (
                <MuiTab label={tab} key={index} sx={{fontFamily:'rockwell'}} />
            ))}
            
           

            </Tabs>

        </Box>
    )
}


export default Tab