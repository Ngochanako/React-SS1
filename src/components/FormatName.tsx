import React from 'react'
import './Bai3/bai3.css'
export default function FormatName() {
    type User={
        firtname:string,
        lastname:string,
    }
    const user:User={
        firtname:'Nguyen',
        lastname:'Ngoc',
    }
    function formartName(user:User) {
        return `Họ và tên: ${user.firtname} ${user.lastname} `
    }
  return (
    <div className='b'>
      {formartName(user)}
    </div>
  )
}
