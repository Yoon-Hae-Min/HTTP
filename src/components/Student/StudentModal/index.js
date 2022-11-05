import {
  Button,
  Divider,
  List,
  ListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import produce from "immer";
import React, { useContext } from "react";
import { useState } from "react";
import { InfoContexts } from "../../../providers";
import WeightInput from "./WeightInput";

const StudentModal = ({ open, handleClose }) => {
  const { subjects, selectedSubject, setInfo } = useContext(InfoContexts);
  const [student, setStudent] = useState({
    name: "",
    id: "",
    grades: [],
  });

  const onChangeSelect = (event, index) => {
    setStudent((pre) => {
      return produce(pre, (draft) => {
        draft.grades[index] = event.target.value;
      });
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setInfo((pre) => {
      return produce(pre, (draft) => {
        draft.subjects[selectedSubject].students.push(student);
      });
    });
    handleClose();
  };

  const onChangeText = (event) => {
    setStudent((pre) => {
      return produce(pre, (draft) => {
        draft[event.target.name] = event.target.value;
      });
    });
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        width="800px"
        sx={{
          backgroundColor: "white",
          display: "block",
          left: "50%",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%,-50%)",
          padding: "50px",
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h2">
          학생추가
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="이름"
            name="name"
            onChange={onChangeText}
            variant="outlined"
            sx={{ marginTop: "40px" }}
          />
          <TextField
            id="outlined-basic"
            label="학번"
            name="id"
            onChange={onChangeText}
            variant="outlined"
            sx={{ marginTop: "40px", marginLeft: "40px" }}
          />
          <List>
            <ListItem>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  width: "100%",
                  margin: "10px",
                }}
                color="text.secondary"
              >
                과목
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  width: "100%",
                  margin: "10px",
                  float: "right",
                }}
                color="text.secondary"
              >
                성적
              </Typography>
            </ListItem>
            <Divider />
            {subjects[selectedSubject].weights.map((weight, index) => {
              return (
                <WeightInput
                  weight={weight}
                  value={student.grades[index]}
                  onChange={(event) => onChangeSelect(event, index)}
                />
              );
            })}
          </List>
          <Button
            variant="contained"
            type="submit"
            sx={{ justifyContent: "center" }}
          >
            저장하기
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default StudentModal;
