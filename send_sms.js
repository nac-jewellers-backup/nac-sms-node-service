let send_sms = ({ mobile_no, msg_txt, sender_id }) => {
  return new Promise((resolve, reject) => {
    const axios = require("axios");
    axios({
      method: "POST",
      url: "https://dmzotp.aclgateway.com/OTP_ACL_Web/otpjsonlistener",
      data: {
        enterpriseid: "nacjotp",
        subEnterpriseid: "nacjotp",
        pusheid: "nacjotp",
        pushepwd: "nacjotp27",
        contenttype: "1",
        sender: sender_id,
        alert: "1",
        msisdn: mobile_no,
        intflag: "false",
        msgtext: msg_txt,
      },
    })
      .then(resolve)
      .catch(reject);
  });
};

export default send_sms;
