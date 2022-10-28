import { Container } from "@mui/material";
import Navigation from "../components/Commom/Navigation";
import SubjectTabs from "../components/Commom/Tabs";
import TabTitle from "../components/Commom/TabTitle";

function Main() {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <TabTitle>학생목록</TabTitle>
        <SubjectTabs></SubjectTabs>
      </Container>
    </>
  );
}

export default Main;
