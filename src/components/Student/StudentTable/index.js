import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import StudentRating from "../../../utils/studentRating";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function Row(props) {
  const { weights, student } = props;
  const [open, setOpen] = useState(false);
  const studentWeight = [
    ...weights.map((weight, index) => ({
      ...weight,
      grade: student.grades[index],
    })),
  ];
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{student.name}</TableCell>
        <TableCell align="right">{student.id}</TableCell>
        <TableCell align="right">{StudentRating(studentWeight)}</TableCell>
        <TableCell align="right" sx={{ width: "40px" }}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 5 }}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                color="text.primary"
              >
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>과목명</TableCell>
                    <TableCell>성적</TableCell>
                    <TableCell>가중치 비율</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentWeight.map((weight) => (
                    <TableRow key={weight.name}>
                      <TableCell>{weight.name}</TableCell>
                      <TableCell>{weight.grade}</TableCell>
                      <TableCell>{weight.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function StudentTable({ studentData, weightData }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>이름</TableCell>
              <TableCell align="right">학번</TableCell>
              <TableCell align="right">가중치 합계</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((student) => (
              <Row key={student.id} student={student} weights={weightData} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
