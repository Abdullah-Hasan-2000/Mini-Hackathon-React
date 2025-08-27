import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import BranchCards from '../components/Cards/BranchCards.jsx';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

    const navigate = useNavigate();
  return (
    <>
      <div style={{width: '100%', backgroundColor: '#1976d2', height: '60px'}}>
        <p style={{color: 'white', margin: 0, padding: '16px', fontSize: '24px'}}>Welcome</p>
      </div>
      <div style={{padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Select A Branch</h1>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <BranchCards onclick={() => navigate('/branch-karachi')} title={"Karachi Branch"} detail={"Branches are a crucial part of a tree's structure, providing support and stability."}/>
            <BranchCards onclick={() => navigate('/branch-lahore')} title={"Lahore Branch"} detail={"Branches are a crucial part of a tree's structure, providing support and stability."}/>
            <BranchCards onclick={() => navigate('/branch-islamabad')} title={"Islamabad Branch"} detail={"Branches are a crucial part of a tree's structure, providing support and stability."}/>
        </div>
      </div>
    </>
  )
}

export default UserDashboard