// netlify/functions/saveData.js
const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Only POST allowed",
    };
  }

  try {
    const data = JSON.parse(event.body);
    const filePath = path.join(__dirname, "data.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data saved successfully" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error saving data", details: err.message }),
    };
  }
};
