import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index = 1, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const SubjectTabs = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          onChange={handleChange}
          aria-label="lab API tabs example"
          value={value}
        >
          <Tab label="Item One" value={1} />
          <Tab label="Item Two" value={2} />
          <Tab label="Item Three" value={3} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default SubjectTabs;
