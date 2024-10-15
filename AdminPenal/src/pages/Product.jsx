import React, { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import "../App.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/sanpham")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <main className="product-main-container">
      <div className="product-title">
        <h3>PRODUCTS</h3>
      </div>
      <div className="btn-product">
        <button>Thêm</button>
        <button>Xuất Excel</button>
      </div>

      <div>
        <table className="table-product">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Loại</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Mô tả</th>
              <th>URL_IMG</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.MaSanPham}>
                <td>{product.MaSanPham}</td>
                <td>{product.TenSanPham}</td>
                <td>{product.Loai}</td>
                <td>{product.SoLuong}</td>
                <td>{product.Gia}</td>
                <td>{product.MoTa}</td>
                <td>{product.img_url}</td>
                <td>
                  <button>Xoá</button>
                  <button>Sửa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Product;
