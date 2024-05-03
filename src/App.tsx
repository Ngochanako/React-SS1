import React from 'react'
import Bai1 from './components/Bai1/Bai1'
import Calculation from './components/Bai2/Calculation'
import UserInfo from './components/Bai3/UserInfo'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'
import AdminIndex from './components/AdminIndex'
import Userlayout from './components/Bai8/Userlayout'
import Bai9 from './components/Bai9/Bai9'
import Bai10 from './components/Bai10/Bai10'
export default function App() {
  return (
    <body>
      <div style={{display:'flex',flexDirection:'column',width:'1200px',alignItems:'center',justifyContent:'center'}}>
      <Bai1 />
      <Calculation />
      <UserInfo />
      <ColorBox />
      <FormatName />
      <AdminIndex />
      <Userlayout />
      <Bai9 />
      <Bai10 />
    </div>
    </body>
  )
}
