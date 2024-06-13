import React from "react";

const Deposit = () => {
  return (
    <div className="active biglist">
      <div className="tab">
        <button className="tablinks active">NẠP THẺ</button>
        <button className="tablinks">NẠP MOMO</button>
        <button className="tablinks">NẠP ATM</button>
      </div>
      <div id="napthe" className="tabcontent" style={{ display: "block" }}>
        <div className="alert alert-error">
          Chú ý ! Chọn đúng mã thẻ, thẻ sai mệnh giá sẽ bị mất.
        </div>
        <div className="alert alert-error">
          Chú ý ! Quá trình nạp sẽ mất từ 7s - 1phút.
        </div>
        <div className="alert alert-error">
          (Tỉ lệ nạp: 10.000đ thẻ cào = 1000 coin, 10.000đ ATM &amp; Momo = 1000
          coin)
        </div>
        <div className="list-card-recharge">
          <h1 className="title">CHỌN LOẠI THẺ :</h1>
          <div className="tags">
            <a
              title="Thẻ Vietel"
              className="hlk_selectCard selected"
              href="javascript:;"
            >
              <img
                className="img-thumbnail"
                src="https://gogun.vn/assets/img/pay/viettel.png"
              />
              <input
                type="radio"
                name="rdoCardType"
                className="ratio_deposite"
              />
            </a>
            <a
              title="Thẻ Mobifone"
              className="hlk_selectCard"
              href="javascript:;"
            >
              <img
                className="img-thumbnail"
                src="https://gogun.vn/assets/img/pay/mobiphone.png"
              />
              <input
                type="radio"
                name="rdoCardType"
                className="ratio_deposite"
              />
            </a>
            <a
              title="Thẻ VinaPhone"
              className="hlk_selectCard"
              href="javascript:;"
            >
              <img
                className="img-thumbnail"
                src="https://gogun.vn/assets/img/pay/vinaphone.png"
              />
              <input
                type="radio"
                name="rdoCardType"
                className="ratio_deposite"
              />
            </a>
            <br />
            <a title="Thẻ Gate" className="hlk_selectCard" href="javascript:;">
              <img className="img-thumbnail" src="https://gogun.vn/assets/img/pay/gate.png" />
              <input
                type="radio"
                name="rdoCardType"
                className="ratio_deposite"
              />
            </a>
            <a title="Thẻ Zing" className="hlk_selectCard" href="javascript:;">
              <img className="img-thumbnail" src="https://gogun.vn/assets/img/pay/zing.png" />
              <input
                type="radio"
                name="rdoCardType"
                className="ratio_deposite"
              />
            </a>
            <a
              title="Thẻ Vietnamobile"
              className="hlk_selectCard"
              href="javascript:;"
            >
              <img
                className="img-thumbnail"
                src="https://gogun.vn/assets/img/pay/vietnamobile.png"
              />
              <input
                type="radio"
                name="rdoCardType"
                className="ratio_deposite"
              />
            </a>
          </div>
          <div>
            <span
              className="typeCardError"
              style={{ width: "49%", color: "red!important", display: "none" }}
            >
              Vui lòng chọn loại thẻ
            </span>
          </div>
        </div>
        <form id="rechargeForm" className="account">
          <div style={{ padding: "30px" }}>
            <div className="selects">
              <label className="control-label" htmlFor="email_login">
                Mệnh giá:
              </label>
              <select
                id="menhgia_the"
                name="menhgia_the"
                autoComplete="off"
                className="form-control"
              >
                <option value>-- Chọn mệnh giá--</option>
                <option value={10000}>10,000 vnd</option>
                <option value={20000}>20,000 vnd</option>
                <option value={30000}>30,000 vnd</option>
                <option value={50000}>50,000 vnd</option>
                <option value={100000}>100,000 vnd</option>
                <option value={200000}>200,000 vnd</option>
                <option value={300000}>300,000 vnd</option>
                <option value={500000}>500,000 vnd</option>
                <option value={1000000}>1,000,000 vnd</option>
              </select>
            </div>
            <span
              className="amountError"
              style={{ width: "49%", color: "red!important", display: "none" }}
            >
              Vui lòng chọn mệnh giá thẻ
            </span>
            <label style={{ margin: "5px 0!important" }}>
              <span>Nhập Serial &amp; Mã thẻ</span>
              <div style={{ width: "100%", margin: "5px 0!important" }}>
                <input
                  style={{ width: "49%" }}
                  id="txtSerial"
                  placeholder="Nhập số serial"
                  autoComplete="off"
                  required
                />
                <input
                  style={{ width: "49%", marginLeft: 6 }}
                  id="txtPasscard"
                  placeholder="Nhập mã thẻ"
                  autoComplete="off"
                  required
                />
              </div>
              <div style={{}}>
                <span
                  className="serialError"
                  style={{
                    width: "49%",
                    color: "red!important",
                    display: "none",
                  }}
                >
                  Vui lòng nhập số Seri
                </span>
                <span
                  className="passcardError"
                  style={{
                    width: "49%",
                    color: "red!important",
                    display: "none",
                  }}
                >
                  Vui lòng nhập mã thẻ
                </span>
              </div>
            </label>
            <label style={{ margin: "5px 0!important" }}>
              <span>Xác nhận Captcha (Nhập kết quả của phép tính!)</span>
              <div style={{ width: "100%", margin: "5px 0!important" }}>
                <div className="wrapper-captcha">
                  <input
                    type="text"
                    id="txtCaptcha"
                    style={{ width: "200px" }}
                    placeholder="Nhập chuỗi bên cạnh"
                    autoComplete="off"
                    required
                  />
                  <img
                    id="captcha_img_src"
                    src="https://gogun.vn/captcha/default?5di9acW3"
                  />
                </div>
                <div
                  id="regacc_txtcode_tooltip"
                  className="error-check"
                  style={{ display: "none" }}
                ></div>
              </div>
            </label>
            <div
              className="errors-recharge-form"
              style={{ display: "none", color: "red" }}
            />
            <div className="button-functional-account">
              <a
                id="rechargeCardBtn"
                className="item"
                style={{
                  backgroundColor: "rgb(245,98,0)",
                  borderColor: "rgb(250,83,0)",
                }}
              >
                NẠP THẺ
              </a>
            </div>
          </div>
        </form>
      </div>
      <div id="napmomo" className="tabcontent" style={{ display: "none" }}>
        <div className="card-body">
          Chuyển khoản MOMO tới số : <b>0396720682</b> <br />
          Tên Tài Khoản : <b>Phạm Văn Hưng</b>
          <br />
          Nội dung: GG <b>31445</b>
          <br />
          <br />
          <b>
            <font color="red">
              Vui lòng chuyển khoản đúng nội dung để hệ thống có thể kiểm tra
              nhanh nhất ( &lt; 60 giây)
            </font>
          </b>
        </div>
      </div>
      <div id="napatm" className="tabcontent" style={{ display: "none" }}>
        <div className="card-body">
          Chuyển khoản ATM tới: 33666608101998
          <br /> (MBBank - Phạm Văn Hưng )<br />
          Nội dung: GG <b>31445</b>
          <br />
          <br />
          <b>
            <font color="red">
              Vui lòng chuyển khoản đúng nội dung "GG <b>31445</b>" để hệ thống
              có thể kiểm tra nhanh nhất ( &lt; 60 giây)
            </font>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
