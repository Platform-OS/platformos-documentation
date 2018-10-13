const fs = require("fs");
const path = require("path");
const got = require("got");
const ejs = require("ejs");
const template = require("../generators/portal/template.js");

const DOCS_URL = "https://portal.apps.near-me.com/docs/api.json";
// prettier-ignore
const generatedHtmlFilePath = path.resolve("marketplace_builder", "views", "pages", "api-reference", "portal", "api.liquid");

const updateGeneratedHtml = html => {
  fs.writeFile(generatedHtmlFilePath, html, "utf8", err => {
    if (err) return console.log(err);
    console.log("[Partner Portal API Docs] Updated");
  });
};

got(DOCS_URL)
  .then(response => JSON.parse(response.body))
  .then(endpoints => ejs.render(template, { endpoints }))
  .then(updateGeneratedHtml)
  .catch(error => {
    console.log(error.response.body);
  });
