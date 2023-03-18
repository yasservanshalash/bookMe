import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import { User } from "../../types/types";
import { green, pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { editIsAdmin, editIsBanned } from "../../redux/thunk/usersThunk";
import { useState } from "react";
import UserList from "./UserList";
import { boolean } from "yargs";
type PropType = {
  userList: User;
};

export default function UserListDetail({ userList }: PropType) {
  const dispatch = useDispatch<AppDispatch>();
  //const [isAdmin, setAdmin] = useState<boolean>(false);
  //const [isBanned, setBanned] = useState<boolean>(false);
  function setIsAdmin(isAdmin: boolean) {
    console.log(isAdmin, "isAdmin");
    dispatch(editIsAdmin(userList, isAdmin));
  }
  function setIsBanned(isBanned: boolean) {
    // console.log(isBanned, "isbannned");
    //setBanned(true);
    dispatch(editIsBanned(userList, isBanned));
    //setBanned(false);
  }
  return (
    <TableBody sx={{ width: 10, height: 10 }}>
      <TableRow style={{ height: "30px" }}>
        <TableCell>{userList.name}</TableCell>
        <TableCell>{userList.email}</TableCell>
        <TableCell>{userList.phoneNumber}</TableCell>

        <TableCell>
          {userList.isAdmin ? (
            <Checkbox
              onChange={(e) => setIsAdmin(e.target.checked)}
              defaultChecked
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          ) : (
            <Checkbox
              onChange={(e) => setIsAdmin(e.target.checked)}
              sx={{
                color: pink[800],
              }}
            />
          )}
        </TableCell>

        <TableCell>
          {userList.isBanned ? (
            <Checkbox
              onChange={(e) => setIsBanned(e.target.checked)}
              defaultChecked
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          ) : (
            <Checkbox
              onChange={(e) => setIsBanned(e.target.checked)}
              sx={{
                color: green[800],
              }}
            />
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
