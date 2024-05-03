import React from 'react'
import './bai3.css'
export default function UserInfo() {
    type obj={
       name:string,
       gender:string,
       date: string,
       email:string,
       address:string,

    }
    let a:obj={
        name:'Nguyễn Văn A',
        gender:'Nam',
        date:'20/12/2993',
        email:'abc@gmail.com',
        address: 'ha noi',
    }
  return (
    <div>
      <h2 className='b'>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên: <span className='b'>{a.name}</span></li>
        <li>Giới tính: <span className='b'>{a.gender}</span></li>
        <li>Ngày sinh: <span className='b'>{a.date}</span></li>
        <li>Email: <span className='b'>{a.email}</span></li>
        <li>Địa chỉ: <span className='b'>{a.address}</span></li>
      </ul>
    </div>
  )
}


