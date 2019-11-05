const fs = require("fs");
const chalk = require("chalk");

// get notes
function getNotes() {
  return "Your notes";
}

// add notes

function addNote(title, body) {
  const notes = loadNotes();
  const doplicate = notes.length === 0 ? false : isDoplicateNotes(title, notes);

  if (doplicate) {
    console.log(chalk.red("Doplicate Notes can't saved!"));
  } else {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green("Note Saved..."));
  }
}

// helper
function loadNotes() {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const notes = bufferData.toString();
    return JSON.parse(notes);
  } catch (error) {
    return [];
  }
}

function saveNotes(notes) {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
}

function isDoplicateNotes(title, notes) {
  const isDoplicate = notes.filter(function(note) {
    return note.title === title;
  });

  return isDoplicate.length === 0 ? false : true;
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
