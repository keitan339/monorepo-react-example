"use strict";

module.exports = {
  development: ["since 2021", "not IE 11"],
  test: ["since 2021", "not IE 11"],
  production: [
    "and_chr 96",
    "and_ff 94",
    "android 96",
    "chrome 88",
    "edge 88",
    "firefox 85",
    "ios_saf 14.5",
    "op_mob 64",
    "opera 73",
    "safari 14.1",
    "samsung 14.0",
  ],
};
