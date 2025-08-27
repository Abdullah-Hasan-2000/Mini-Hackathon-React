import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import NavigationBar from '../../components/NavigationBar/NavigationBar.jsx';
import { Box, Paper, Button, Modal, TextField } from '@mui/material';
import BranchTable from '../../components/Table/BranchTable.jsx';
import axios from 'axios';

const BranchManagementScreen = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [managerId, setManagerId] = useState('');
    const [refresh, setRefresh] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setName('');
        setLocation('');
        setManagerId('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !location || !managerId) return;
        const res = await axios.get('http://localhost:3000/branches');
        const branches = res.data;
        const existingBranch = branches.find(branch => branch.name === name);
        if (existingBranch) {
            alert('Branch already exists');
            return;
        }
        // Get the last numeric id
        const numericIds = branches
            .map(b => typeof b.id === 'number' ? b.id : parseInt(b.id, 10))
            .filter(id => !isNaN(id));
        const lastId = numericIds.length > 0 ? Math.max(...numericIds) : 0;
        const newId = lastId + 1;
        await axios.post('http://localhost:3000/branches', { id: newId, name, location, managerId });
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
                    <h1>Branch Management</h1>
                    <p>Welcome to the Branch Management Screen!</p>
                    <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
                      Add Branch
                    </Button>
                    <BranchTable refresh={refresh} />
                    <Modal open={open} onClose={handleClose}>
                      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4 }}>
                        <h2>Add New Branch</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <TextField label="Name" value={name} onChange={e => setName(e.target.value)} required />
                          <TextField label="Location" value={location} onChange={e => setLocation(e.target.value)} required />
                          <TextField label="Manager ID" value={managerId} onChange={e => setManagerId(e.target.value)} required />
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
  )
}

export default BranchManagementScreen