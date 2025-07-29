import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { sidebarContext } from './navcontext';
import Header from './Header';
import Sidebar from './Sidebar';
const Navbar = () => {
    const [ status, setStatus ] = useState();
  return (
    <sidebarContext.Provider value={[status, setStatus]}>
           <Header />
           <Sidebar />
    </sidebarContext.Provider>
  )
}

export default Navbar