import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TeamCard from "../../StudentTeam/TeamCard";
import TeamCardGrid from "../../StudentTeam/TeamCardGrid";
import Setting from "../../../pages/Setting";
import StudentList from "../../../pages/StudentList";

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
          <Tab label="학생 목록" value={1} />
          <Tab label="팀 편성" value={2} />
          <Tab label="설정" value={3} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        <StudentList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TeamCardGrid>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </TeamCardGrid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Setting />
      </TabPanel>
    </Box>
  );
};

export default SubjectTabs;
