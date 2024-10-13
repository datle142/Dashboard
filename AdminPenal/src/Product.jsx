import React from 'react'
import { BsCheck } from 'react-icons/bs'

function Product() {
  return (
    <main className='product-main-container'>
      <div className='product-title'>
        <h3>PRODUCTS</h3>
      </div>
      <div className='btn-product'>
        <button>Thêm</button>        
        <button>Xuất Excel</button>
      </div>

      <div>
      <table className='table-product'>
        <thead>
          <tr>            
            <th>ID</th>
            <th>Tên</th>
            <th>Loại</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>URL_IMG</th>
            <th></th>
          </tr>
        </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>
          <button>Xoá</button>
          <button>Sửa</button>
        </td>
      </tr>
    </tbody>
      </table>

      </div>
    </main>
  )
}

export default Product