import "./app.scss";

import btnMenu from "./js/btnMenu";
import widgetNav from "./js/widgetNav";
import tables from "./js/tables";
import tabs from "./js/tabs";
import scrollTo from "./js/scrollTo";
import WebFont from "webfontloader";

scrollTo();
tabs();
tables();
widgetNav();
btnMenu();

WebFont.load({
  google: {
    families: ["Roboto:300,500,700"],
    text:
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?.;,-_+={}[]"><@#~`$%^&*()'
  },
  timeout: 2000 // Set the timeout to two seconds
});
