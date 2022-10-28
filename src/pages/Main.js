import { Container } from "@mui/material";
import Navigation from "../components/Commom/Navigation";
import SubjectTabs from "../components/Commom/Tabs";

function Main() {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <SubjectTabs></SubjectTabs>
      </Container>
    </>
  );
}

export default Main;
