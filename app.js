// to validate the string
const validator = require("validator");

// to color the console
const chalk = require("chalk");

// to get input from the console
const yargs = require("yargs");

// custome module
const notes = require("./notes");

// regester the remove command
yargs.command({
  command: "remove",
  describe: "remove note",
  handler: function() {
    console.log("the note removed!");
  }
});

// regester the read command
yargs.command({
  command: "read",
  describe: "read note",
  handler: function() {
    console.log("the note readed!");
  }
});

// regester the list command
yargs.command({
  command: "list",
  describe: "list note",
  handler: function() {
    console.log("the note listed!");
  }
});

// regester the add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.parse();
