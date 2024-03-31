const SibApiV3Sdk = require("@getbrevo/brevo");

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = process.env.MY_API_KEY;

let sendEmail = ({ to, sender, subject, htmlContent, attachments, name }) => {
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.sender = {
    name: "vivek kumar",
    email: "kumarvivek21266@gmail.com",
  };
  sendSmtpEmail.to = [{ email: to, name: name }];

  sendSmtpEmail.replyTo = {
    email: to,
    name: name,
  };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  attachments;

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendEmail(args);
  }
};
