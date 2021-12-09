const moment = require('moment');
const chalk = require('chalk');

const colors = {
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  reset: "\x1b[0m",
}

const methodColorMap = {
  get: colors.green,
  post: colors.cyan,
  put: colors.yellow,
  delete: colors.red,
  etc: colors.reset
}

const generatorId = (length = 6) => {
  const result = [];
  const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let i=0; i<length; i++) {
    result.push(char.charAt(Math.floor(Math.random()*char.length)));
  }

  return result.join('');
}

const writeLog = (req, text = '') => {
  // # date and time
  // const now = moment().format('MMM/DD/YY kk:mm:ss.SSS');
  const date = moment().format('MMM/DD/YY');
  const time = moment().format('kk:mm:ss.SS');
  const datetime = `${chalk.blue.bold(date)} ${chalk.cyan.bold(time)}`;

  // # identifier
  const id = generatorId();
  if(!req.session?.identifier) {
    const identifier = `${chalk.hex(`#${Math.floor(Math.random()*16777215).toString(16)}`).bold(id)}`;
    req.session.identifier = identifier;
  }

  // # write log
  const log = `[${datetime}] [${req.session.identifier}] ${text}`
  console.log(log)
}

const middlewareLog = (text = '') => (req, res, next) => {
  const { method, url } = req;
  const logMethod = `${methodColorMap[method.toLowerCase()] || methodColorMap.etc}${method}${colors.reset}`;
  const text = `${logMethod} ${url}`;

  writeLog(req, text);
  next();
}

module.exports = {
  writeLog,
  middlewareLog,
};


/*
app.listen(port, function () {
  let serverMessage = `
    \x1b[34m ################################################################ \x1b[0m
    \x1b[34m # \x1b[0m\x1b[5m EX-Event Client Web Server \x1b[0m
    \x1b[34m # \x1b[0m Server listening on \x1b[31m http://${host}:${port} \x1b[0m
    \x1b[34m ################################################################ \x1b[0m
    \x1b[34m # \x1b[0m Node.js version \x1b[34m | \x1b[31m ${process.version} \x1b[0m
    \x1b[34m # \x1b[0m Pid             \x1b[34m | \x1b[31m ${process.pid} \x1b[0m
    \x1b[34m ################################################################ \x1b[0m
  `;

*/