import React, { useState } from "react";
import CustomAlert from "../../../General/Alert";
import { toast } from "react-toastify";
import { useSnackbar } from "react-simple-snackbar";
const HistoryRecharge = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar({
    position: "bottom-right",
    style: {
      // backgroundColor: 'midnightblue',
      // border: '2px solid lightgreen',
      // color: 'lightblue',
      // fontFamily: 'Menlo, monospace',
      // fontSize: '20px',
      // textAlign: 'center',
    },
    closeStyle: {
      // color: 'lightcoral',
      // fontSize: '16px',
    },
  });
  const notify = () => {
    toast.info(
      <CustomAlert
        message="This is a custom alert!"
        closeToast={() => toast.dismiss()}
      />,
      {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        icon: false, // Hide the default icon
        theme: "dark",
      }
    );
  };
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const data = [
    {
      type: "Viettel",
      serial: "27872872897",
      code: "27182781278192",
      amount: "30.000đ",
      time: "2024-06-13 01:15:24",
      status: "Thất bại",
      statusColor: "red",
      details: "Additional details about this transaction...",
    },
    // Add more rows as needed
  ];

  return (
    <div className="active biglist">
      <form id="createAccountForm" className="account">
        <div className="content">
          <table
            onClick={() => openSnackbar("This is the content of the Snackbar.")}
            className="MyTable"
          >
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
              {data.map((row, index) => (
                <React.Fragment key={index}>
                  <tr
                    onClick={() => handleRowClick(index)}
                    className="clickable-row"
                  >
                    <td>{row.type}</td>
                    <td>{row.serial}</td>
                    <td>{row.code}</td>
                    <td>{row.amount}</td>
                    <td>{row.time}</td>
                    <td>
                      <span style={{ color: row.statusColor }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="expanded-row">
                      <div>
                        <div>{row.type}</div>
                        <div>{row.serial}</div>
                        <div>{row.code}</div>
                        <div>{row.amount}</div>
                        <div>{row.time}</div>
                        <div>{row.details}</div>
                      </div>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default HistoryRecharge;
