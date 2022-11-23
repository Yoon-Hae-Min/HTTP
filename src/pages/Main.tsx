import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useContext } from 'react';
import Navigation from '../components/Commom/Navigation';
import SubjectTabs from '../components/Commom/TabPanel';
import TabTitle from '../components/Commom/TabTitle';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { InfoContext } from '../providers';
import TabPanel from '../components/Commom/TabPanel';
import Setting from './Setting';

function Main() {
  const { subjects, selectedSubject } = useContext(InfoContext);
  const [value, setValue] = useState<number>(1);
  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number): void => {
    setValue(newValue);
  };
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <TabTitle>{subjects[selectedSubject].name}</TabTitle>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs onChange={handleChange} aria-label="lab API tabs example" value={value}>
              <Tab label="학생 목록" value={1} />
              <Tab label="팀 편성" value={2} />
              <Tab label="설정" value={3} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={1}>
            <StudentList />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <StudentTeam />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Setting />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}

export default Main;
