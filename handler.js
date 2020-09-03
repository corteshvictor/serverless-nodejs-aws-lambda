"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

const message = async (event) => {
  const { pathParameters: { name = "" } = {} } = event;
  const reply = `Hello ${name}`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: reply,
    }),
  };
};

const cronjob = () => {
  const now = new Date();
  const message = `The time is ${now}`;
  console.log("It is running: ", message);
  return message;
};

module.exports = {
  hello,
  message,
  cronjob,
};
