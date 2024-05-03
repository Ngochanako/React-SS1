import React from 'react'
import './Bai3/bai3.css'
export default function AdminIndex() {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%'}} className='bai3'>
      <header style={{ height:'20px',backgroundColor:'grey'}}></header>
      <div style={{display:'flex',width:'100%'}}>
          <aside style={{width:'20%',backgroundColor:'olive',display:'flex',alignItems:'center',justifyContent:'center',height:'500px',color:'white'}}>Main</aside>
          <section style={{display:'flex',flexDirection:'column', border:'20px solid orange',width:'80%'}}>
            <main style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90%'}}>Main</main>
            <footer style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'green',color:'white',height:'10%'}}>Footer</footer>
          </section>
      </div>
    </div>
  )
}
