
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import NavigationBar from '../../components/NavigationBar/NavigationBar.jsx';
import { Box, Paper, Button, Modal, TextField } from '@mui/material';
import ProductTable from '../../components/Table/ProductTable.jsx';
import axios from 'axios';


const ProductManagementScreen = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [views, setViews] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setViews('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !views) return;
    await axios.post('http://localhost:3000/posts', { title, views: Number(views) });
    setRefresh(r => !r); // trigger table refresh
    handleClose();
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2 , paddingLeft: 6 }}>
          <div style={{ width: '400px', height: '100vh' }}>
            <NavigationBar />
          </div>
          <Box sx={{ marginLeft: 2, width: '100%' }}>
            <Paper elevation={3} sx={{ paddingX: 2, paddingTop: 2, width: '95%' }}>
              <div>
                <h1>Product Management</h1>
                <p>Welcome to the Product Management Screen!</p>
                <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
                  Add Product
                </Button>
                <ProductTable refresh={refresh} />
                <Modal open={open} onClose={handleClose}>
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4 }}>
                    <h2>Add New Product</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <TextField label="Name" value={title} onChange={e => setTitle(e.target.value)} required />
                      <TextField label="Price" type="number" value={views} onChange={e => setViews(e.target.value)} required />
                      <Button type="submit" variant="contained" color="primary">Add</Button>
                    </form>
                  </Box>
                </Modal>
              </div>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductManagementScreen