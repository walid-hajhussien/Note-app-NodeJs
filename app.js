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
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
});

// regester the read command
yargs.command({
  command: "read",
  describe: "read note",
  handler() {
    console.log("the note readed!");
  }
});

// regester the list command
yargs.command({
  command: "list",
  describe: "list note",
  handler() {
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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.parse();
