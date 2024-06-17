import React, { useEffect, useState } from "react";
import handleBanking from "../../../../api/get/banking";
import ItemCard from "../../../deposit/ItemCard";

const Deposit = () => {
  const dataCard = [
    {
      id: 1,
      title: "Thẻ Vietel",
      src: "https://gogun.vn/assets/img/pay/viettel.png",
    },
    {
      id: 2,
      title: "Thẻ Mobifone",
      src: "https://gogun.vn/assets/img/pay/mobiphone.png",
    },
    {
      id: 3,
      title: "Thẻ VinaPhone",
      src: "https://gogun.vn/assets/img/pay/vinaphone.png",
    },
    {
      id: 4,
      title: "Thẻ Gate",
      src: "https://gogun.vn/assets/img/pay/gate.png",
    },
    {
      id: 5,
      title: "Thẻ Zing",
      src: "https://gogun.vn/assets/img/pay/zing.png",
    },
    {
      id: 6,
      title: "Thẻ Vietnamobile",
      src: "https://gogun.vn/assets/img/pay/vietnamobile.png",
    },
  ];
  const [data, setData] = useState();
  const [tab, setTab] = useState(1);
  const [tabCard, setTabCard]= useState(1)
  const handleChangeTab = (tab) => {
    setTab(tab);
  };
  const handleChangeTabCard = (tab) => {
    setTabCard(tab);
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await handleBanking();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="active biglist">
      <div className="tab">
        <button
          onClick={() => handleChangeTab(1)}
          className={`tablinks ${tab === 1 && "active"}`}
        >
          NẠP THẺ
        </button>
        <button
          onClick={() => handleChangeTab(2)}
          className={`tablinks ${tab === 2 && "active"}`}
        >
          NẠP MOMO
        </button>
        <button
          onClick={() => handleChangeTab(3)}
          className={`tablinks ${tab === 3 && "active"}`}
        >
          NẠP ATM
        </button>
      </div>
      {tab === 1 && (
        <div id="napthe" className="tabcontent" style={{ display: "block" }}>
          <div className="alert alert-error">
            Chú ý ! Chọn đúng mã thẻ, thẻ sai mệnh giá sẽ bị mất.
          </div>
          <div className="alert alert-error">
            Chú ý ! Quá trình nạp sẽ mất từ 7s - 1phút.
          </div>
          <div className="alert alert-error">
            (Tỉ lệ nạp: 10.000đ thẻ cào = 1000 coin, 10.000đ ATM &amp; Momo =
            1000 coin)
          </div>
          <div className="list-card-recharge">
            <h1 className="title">CHỌN LOẠI THẺ :</h1>
            <div className="tags">
              {dataCard?.map((item, key) => (
                <ItemCard key={item.id} title={item.title} src={item.src} id={item.id} tab={tabCard} onClick={handleChangeTabCard} />
              ))}
            </div>
            <div>
              <span
                className="typeCardError"
                style={{
                  width: "49%",
                  color: "red!important",
                  display: "none",
                }}
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
                style={{
                  width: "49%",
                  color: "red!important",
                  display: "none",
                }}
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
      )}
      {tab === 2 && (
        <div id="napmomo" className="tabcontent" style={{ display: "block" }}>
          <div className="card-body">
            Chuyển khoản MOMO tới số : <b>{data?.momo?.account}</b> <br />
            Tên Tài Khoản : <b>{data?.momo?.name}</b>
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
      )}
      {tab === 3 && (
        <div id="napatm" className="tabcontent" style={{ display: "block" }}>
          <div className="card-body">
            Chuyển khoản ATM tới: {data?.atm?.account}
            <br /> ({data?.atm?.name} )<br />
            Nội dung: GG <b>31445</b>
            <br />
            <br />
            <b>
              <font color="red">
                Vui lòng chuyển khoản đúng nội dung "GG <b>31445</b>" để hệ
                thống có thể kiểm tra nhanh nhất ( &lt; 60 giây)
              </font>
            </b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposit;
