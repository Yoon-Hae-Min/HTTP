import React, { useState, useCallback } from 'react';
import { Container } from '@mui/material';
import Navigation from '../components/Commom/Navigation';
import TabTitle from '../components/Commom/TabTitle';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../components/Commom/TabPanel';
import Setting from './Setting';
import StudentList from './StudentList';
import StudentTeam from './StudentTeam';
import useSubject from '../hooks/useSubject';

function Main() {
  const { currentSubject } = useSubject();
  const [value, setValue] = useState<number>(1);
  const handleChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, newValue: number): void => {
      setValue(newValue);
    },
    []
  );
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <TabTitle>{currentSubject.name}</TabTitle>
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
