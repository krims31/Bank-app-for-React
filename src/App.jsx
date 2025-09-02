import React from 'react'
import Header from './components/header/Header'
import LeftSide from './components/left-side/LeftSide'
import Cashback from './components/Cashback/Cashback'
import 'boxicons/css/boxicons.min.css';
import './App.css'
import CentreTop from './components/centre-top-card/CentreTop';
import TotalIncome from './components/TotalIncome/TotalIncome';
import Spending from './components/Spending/Spending';

function App() {

  return (
    <>
      <Header />
      <LeftSide />
      <CentreTop />
      <TotalIncome />
      <Cashback />
      <Spending />
    </>
  )
}

export default App
