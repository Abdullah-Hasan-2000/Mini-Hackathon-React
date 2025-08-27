import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductTable({ refresh }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/branch')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Failed to fetch posts:', err));
  }, [refresh]);

  return (
    <>
      {console.log("we are here")}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="posts table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Manager ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.name}</TableCell>
              <TableCell>{post.location}</TableCell>
              <TableCell align="right">{post.managerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
