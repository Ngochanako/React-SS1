import React from 'react'

export default function ColorBox() {
  return (
    <div style={{display:'flex',gap:'10px'}}>
      <p style={{width:'100px',height:'100px',backgroundColor:'red'}}></p>
      <p style={{width:'100px',height:'100px',backgroundColor:'green'}}></p>
      <p style={{width:'100px',height:'100px',backgroundColor:'yellow'}}></p>
    </div>
  )
}
