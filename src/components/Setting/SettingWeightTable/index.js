import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { ListItemButton, Typography } from "@mui/material";
import SettingWeightTableInput from "../SettingWeightTableInput";
import AddIcon from "@mui/icons-material/Add";
import produce from "immer";

export default function SettingWeightTable({ weights, setWeights }) {
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
            가중치 비율(%)
          </Typography>
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
