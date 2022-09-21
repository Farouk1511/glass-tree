import { Box, Tabs, Tab as MuiTab } from "@mui/material";
import React, { useState } from "react";

const Tab = ({ onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(ApiTabs[newValue])
    // console.log(value)
    // console.log('Here')
   
  };
  const tabs = ["services", "jobs"];
  const ApiTabs = ["service", "job"];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <MuiTab
            label={tab}
            key={index}
            value={index}
            sx={{ fontFamily: "rockwell" }}
          />
        ))}
      </Tabs>
      
    </Box>
  );
};

export default Tab;
