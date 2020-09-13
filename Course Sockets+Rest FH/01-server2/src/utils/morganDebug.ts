import morgan from "morgan";
import chalk from "chalk";

import { getFullDate } from "./dateFormats";

export default morgan((tokens, req, res) =>
  [
    `${chalk.green(getFullDate(), "[TS-Node]")}`,
    "-",
    `${chalk.yellow("[" + tokens.method(req, res) + "]")}`,
    tokens.url(req, res),
    `${chalk.yellow(tokens.status(req, res))}`,
    tokens["response-time"](req, res),
    "ms -",
    tokens.res(req, res, "content-length")
  ].join(" ")
);
