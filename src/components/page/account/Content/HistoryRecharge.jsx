import React from "react";

const HistoryRecharge = () => {
  return (
    <div className="active biglist">
      <form id="createAccountForm" className="account">
        <div className="content">
          <table className="MyTable">
            <thead>
              <tr>
                <th>Loại thẻ</th>
                <th>Serial</th>
                <th>Mã Thẻ</th>
                <th>Mệnh Giá</th>
                <th>Thời Gian</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Viettel</td>
                <td>27872872897</td>
                <td>27182781278192</td>
                <td>30.000đ</td>
                <td>2024-06-13 01:15:24</td>
                <td>
                  <span style={{ color: "red" }}>Thất bại</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default HistoryRecharge;
