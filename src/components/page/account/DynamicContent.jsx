import React from "react";
import Deposit from "./Content/Deposit";
import ChangePassword from "./Content/ChangePassword";
import ChangeEmail from "./Content/ChangeEmail";
import ChangePhoneNumber from "./Content/ChangePhoneNumber";
import ConfirmEmail from "./Content/ConfirmEmail";
import ConvertCoin from "./Content/ConvertCoin";
import HistoryRecharge from "./Content/HistoryRecharge";
import LinkPlayer from "./Content/LinkPlayer";
import RenameCharater from "./Content/RenameCharater";

const DynamicContent = (props) => {
  return (
    <div id="dynamicContentView">
      <section className="box register">
        <div className="title-new">
          <h1 style={{ color: "#c3332a" }}>
            {props?.id== 1 && "Thay đổi mật khẩu"}
            {props?.id== 2 && "Thay đổi email"}
            {props?.id== 3 && "Xác thực email"}
            {props?.id== 4 && "Đổi số điện thoại"}
            {props?.id== 5 && "Nạp tiền"}
            {props?.id== 6 && "Chuyển xu"}
            {props?.id== 7 && "Lịch sử nạp thẻ"}
            {props?.id== 8 && "Link chơi game"}
            {props?.id== 9 && "Đổi tên"}
          </h1>
        </div>
        <div className="tabsContent">
          {!props?.id && <></>}
          {parseInt(props?.id)=== 1 && <ChangePassword {...props} />}
          {parseInt(props?.id)=== 2 && <ChangeEmail {...props} />}
          {parseInt(props?.id)=== 3 && <ConfirmEmail {...props} />}
          {parseInt(props?.id)=== 4 && <ChangePhoneNumber {...props} />}
          {parseInt(props?.id)=== 5 && <Deposit {...props} />}
          {parseInt(props?.id)=== 6 && <ConvertCoin {...props} />}
          {parseInt(props?.id)=== 7 && <HistoryRecharge {...props} />}
          {parseInt(props?.id)=== 8 && <LinkPlayer {...props} />}
          {parseInt(props?.id)=== 9 && <RenameCharater {...props} />}
        </div>
      </section>
    </div>
  );
};

export default DynamicContent;
