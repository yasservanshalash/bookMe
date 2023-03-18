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
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
type PropType = {
  userList: User;
};

export default function UserListDetail({ userList }: PropType) {
  return (
    <TableBody sx={{ width: 10, height: 10 }}>
      <TableRow sx={{ width: 10, height: 10 }}>
        <TableCell>{userList.name}</TableCell>
        <TableCell>{userList.email}</TableCell>
        <TableCell>{userList.phoneNumber}</TableCell>
        {/* <TableCell> {userList.isBanned ? "true" : "false"}</TableCell> */}
        {/*  <TableCell> {userList.isAdmin ? "true" : "false"}</TableCell> */}
        <TableCell>
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </TableCell>
        <TableCell>
          <Checkbox
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </TableCell>
        <TableCell>
          <button>Edit</button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
