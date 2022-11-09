import React, { useEffect, useState } from 'react'
import BaiTapDressingRoom from './DressingRoom/BaiTapDressingRoom'
import { useDispatch } from 'react-redux';
import { BrowserRouter, NavLink, Route, Router, Routes, Switch, useHistory } from 'react-router-dom';

import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs'
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate'
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent';
import Home from './pages/Home/Home';
import Header from './components/Home/Header/Header';
import Contact from './pages/Contact/Contact';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';
import indexCyberbugs from './redux/sagas/CyberBugs/indexCyberbugs';
import CreateProject from './pages/CyberBugs/CreateProject/CreateProject';
import ProjectManagement from './pages/CyberBugs/ProjectManagement/ProjectManagement';
import DrawerCyberbugs from './HOC/CyberBugs/DrawerCyberbugs';
import DemoDragDrop from './pages/DemoDragDrop/DemoDragDrop'

export default function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history })

  }, [])
  return (
    <>

      {/* <Header /> */}
      <DrawerCyberbugs />
      <LoadingComponent />

      <HomeTemplate exact path='/home' Component={Home} />
      {/* <HomeTemplate exact path='/drag' Component={DemoDragDrop} /> */}
      {/* <HomeTemplate exact path='/' Component={Home} /> */}
      <HomeTemplate exact path='/contact' Component={Contact} />
      <CyberbugsTemplate exact path='/cyberbugs' Component={indexCyberbugs} />
      <CyberbugsTemplate exact path='/createproject' Component={CreateProject} />
      <CyberbugsTemplate exact path='/projectmanagement' Component={ProjectManagement} />
      <CyberbugsTemplate exact path='/projectdetail/:projectId' Component={indexCyberbugs} />
      <CyberbugsTemplate exact path='/' Component={ProjectManagement} />

      <UserLoginTemplate exact path='/login' Component={LoginCyberBugs} />

    </>
  )
}
