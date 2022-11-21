import { Container } from "@mui/material";
import { useContext } from "react";
import Navigation from "../components/Commom/Navigation";
import SubjectTabs from "../components/Commom/Tabs";
import TabTitle from "../components/Commom/TabTitle";
import { InfoContexts } from "../providers";

function Main() {
  const { subjects, selectedSubject } = useContext(InfoContexts);
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <TabTitle>{subjects[selectedSubject].name}</TabTitle>
        <SubjectTabs></SubjectTabs>
      </Container>
    </>
  );
}

export default Main;
