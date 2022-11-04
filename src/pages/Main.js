import { Container } from "@mui/material";
import { useContext } from "react";
import Navigation from "../components/Commom/Navigation";
import SubjectTabs from "../components/Commom/Tabs";
import TabTitle from "../components/Commom/TabTitle";
import { InfoContexts } from "../providers";

function Main() {
  const { selectedSubject } = useContext(InfoContexts);
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <TabTitle>{selectedSubject}</TabTitle>
        <SubjectTabs></SubjectTabs>
      </Container>
    </>
  );
}

export default Main;
