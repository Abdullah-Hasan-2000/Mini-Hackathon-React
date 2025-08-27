import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginHandlerScreen from './screens/LoginHandlerScreen'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from './screens/UserDashboard'
import KarachiDashboard from './screens/BranchesPages/KarachiDashboard'
import AdminDashboard from './screens/AdminScreens/AdminDashboard.jsx'
import ProductManagementScreen from './screens/AdminScreens/ProductManagementScreen.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginHandlerScreen />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/branch-karachi" element={<KarachiDashboard />} />
        <Route path="/branch-lahore" element={<KarachiDashboard />} />
        <Route path="/branch-islamabad" element={<KarachiDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/product-management" element={<ProductManagementScreen />} />
      </Routes>
    </>
  )
}

export default App
