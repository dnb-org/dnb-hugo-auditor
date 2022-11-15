const defaultStandardVersion = require("@davidsneighbour/config/standard-version");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/auditor/build.json", type: "json" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
