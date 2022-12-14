import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { ListItemButton, Typography } from "@mui/material";
import SettingWeightTableInput from "../SettingWeightTableInput";
import AddIcon from "@mui/icons-material/Add";
import produce from "immer";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";

export default function SettingWeightTable({
  weights,
  setWeights,
  setDeletedIndex,
}) {
  const onChangeWeight = (event, index) => {
    setWeights((pre) => {
      return produce(pre, (draft) => {
        draft[index][event.target.name] = event.target.value;
      });
    });
  };
  const onClickAddWeight = () => {
    setWeights((pre) => {
      return produce(pre, (draft) => {
        draft.push({
          name: "새로운 가중치",
          value: 0,
        });
      });
    });
  };

  const onClickDelete = (event, index) => {
    setWeights((pre) => {
      return produce(pre, (draft) => {
        draft.splice(index, 1);
      });
    });
    setDeletedIndex((pre) => {
      return produce(pre, (draft) => {
        draft.push(index);
      });
    });
  };
  const onClickAllDelete = (event) => {
    const result = window.confirm("모두 삭제 하시겠습니까?");
    if (!result) {
      return;
    }
    let lastIndex = 0;
    setWeights((pre) => {
      return produce(pre, (draft) => {
        lastIndex = draft.length;
        draft.splice(0);
      });
    });
    const arr = Array.from({ length: lastIndex }, (v, i) => i);
    setDeletedIndex((pre) => {
      return produce(pre, (draft) => {
        draft = arr;
      });
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
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
            가중치 명
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              width: "100%",
              margin: "10px",
            }}
            color="text.secondary"
          >
            가중치 수치
          </Typography>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            onClick={onClickAllDelete}
          >
            <ClearIcon />
          </ListItemButton>
        </ListItem>
        <Divider />
        {weights.map((weight, index) => {
          return (
            <>
              <ListItem>
                <SettingWeightTableInput
                  placeholder="가중치 명을 입력하세요"
                  name="name"
                  onChange={(event) => {
                    onChangeWeight(event, index);
                  }}
                  value={weight.name}
                />
                <SettingWeightTableInput
                  placeholder="가중치 비율을 입력하세요"
                  type="number"
                  name="value"
                  onChange={(event) => {
                    onChangeWeight(event, index);
                  }}
                  value={weight.value}
                />
                <ListItemButton
                  sx={{ justifyContent: "center" }}
                  onClick={(event) => onClickDelete(event, index)}
                >
                  <DeleteIcon />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
        <ListItemButton
          sx={{
            backgroundColor: "#F8F8F8",
            justifyContent: "center",
          }}
          onClick={onClickAddWeight}
        >
          <AddIcon />
        </ListItemButton>
      </List>
    </Box>
  );
}
