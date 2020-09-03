"use strict";

module.exports.hello = async (event) => {
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

module.exports.message = async (event) => {
  const reply = `Hello ${event.pathParameters.name}`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: reply,
    }),
  };
};

module.exports.cronjob = () => {
  const now = new Date();
  const message = `The time is ${now}`;
  console.log("Se esta ejecutando", message);
  return message;
};
