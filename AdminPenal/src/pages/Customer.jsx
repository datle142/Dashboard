import React from "react";

function Customer() {
  return (
    <main className="customer-main-container">
      <div className="customer-title">
        <h3>Customer</h3>
      </div>
      <div className="btn-Customer">
        <button>Thêm</button>
        <button>Xuất Excel</button>
      </div>

      <div>
        <table className="table-customer">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <button>Xoá</button>
                <button>Sửa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Customer;
