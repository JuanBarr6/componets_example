import { myDecisions } from "../token.js";

import * as fs from "fs";

const transformTokens = (parentKey, object) => {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey];

    if (typeof value === "object") {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`;

      return `${tokensTransformed}\n\t${transformTokens(`${customProperty}`, value)}`;
    }
    return `${tokensTransformed}\n\t--${parentKey}-${objectKey}:${value};`;
  }, "");
};

const data = `:root {\n\t${transformTokens(null, myDecisions).trim()}\n}`;

fs.writeFile("./styles/token.css", data, "utf8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});
