import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Bai9() {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Áo thun</td>
            <td>Nam</td>
            <td style={{display:'flex',gap:'10px'}}><button className='btn btn-warning'>Sửa</button><button className='btn btn-info'>Xóa</button></td>

          </tr>
          <tr>
            <td>2</td>
            <td>Quần jean</td>
            <td>Nữ</td>
            <td style={{display:'flex',gap:'10px'}}><button className='btn btn-warning'>Sửa</button><button className='btn btn-info'>Xóa</button></td>

          </tr>
        </tbody>
      </table>
    </>
  )
}