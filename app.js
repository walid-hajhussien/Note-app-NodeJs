const validator = require("validator");
const chalk = require("chalk");

const isEmail = validator.isEmail("1@yahoo.com");

if (isEmail) {
  console.log(chalk.bold.green("Success!"));
} else {
  console.log(chalk.red("Faild!"));
}
