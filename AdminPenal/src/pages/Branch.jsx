import React from "react";
import "../App.css";
function Branch() {
  return (
    <main className="branch-main-container">
      <div className="Branch-title">
        <h3>BRANCH</h3>
      </div>
      <div className="btn-branch">
        <button>Thêm</button>
        <button>Xuất Excel</button>
      </div>

      <div>
        <table className="table-branch">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Địa chỉ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
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

export default Branch;
