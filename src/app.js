import "./app.scss";

import widgetNav from "./js/widgetNav";
import githubContributors from "./js/githubContributors";
import WebFont from "webfontloader";

widgetNav();
githubContributors();

WebFont.load({
  google: {
    families: ["Roboto:300,500,700"],
    active: function() {
      sessionStorage.fonts = true;
    },
    text:
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?.;,-_+={}[]"><@#~`$%^&*()'
  },
  timeout: 2000 // Set the timeout to two seconds
});
