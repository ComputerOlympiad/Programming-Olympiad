// netlify/functions/loadData.js
const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const filePath = path.join(__dirname, "data.json");
    if (!fs.existsSync(filePath)) {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }
    const data = fs.readFileSync(filePath, "utf-8");

    return {
      statusCode: 200,
      body: data,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error loading data", details: err.message }),
    };
  }
};
