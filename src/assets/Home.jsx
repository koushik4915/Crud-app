import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { deleteUser } from "./userReducer";

export default function BasicTable() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteUser({ id }));
  }
  return (
    <>
      <Navbar />
      <h2>Crud App</h2>
      <Link to="/create">
        <Button variant="contained" color="success">
          Create +
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email&nbsp;</TableCell>
              <TableCell align="right" sx={{ paddingRight: "100px" }}>
                Action&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                  <Link to={`/edit/${user.id}`}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    sx={{ margin: "20px" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
