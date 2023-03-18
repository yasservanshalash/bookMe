import React from "react";
import { useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { getUserList } from "../../redux/thunk/usersThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import UserListDetail from "./UserListDetail";
import { Fragment } from "react";

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  const userList = useSelector((state: RootState) => state.users.userList);

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead
            className="table-header-row"
            style={{ height: "30", color: "red" }}>
            <TableRow
              className="table-header-row"
              style={{ height: "30", color: "blue" }}>
              <TableCell sx={{ Width: 50 }}>
                <b>Name</b>
              </TableCell>
              <TableCell sx={{ Width: 50 }}>
                <b>Email</b>
              </TableCell>
              <TableCell sx={{ Width: 50 }}>
                <b>PhoneNumber</b>
              </TableCell>
              <TableCell sx={{ Width: 50 }}>
                <b>Is Admin</b>
              </TableCell>{" "}
              <TableCell sx={{ Width: 50 }}>
                <b>Is Banned</b>
              </TableCell>
              <TableCell>
                <b>Edit</b>
              </TableCell>
            </TableRow>
          </TableHead>

          {userList.map((item) => {
            return <UserListDetail key={item._id} userList={item} />;
          })}
        </Table>
      </TableContainer>
    </Fragment>
  );
}
