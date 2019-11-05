const fs = require("fs");
const chalk = require("chalk");

// get notes
function getNotes() {
  return "Your notes";
}

// add notes

function addNote(title, body) {
  const notes = loadNotes();
  const doplicate = notes.length === 0 ? false : isNotesExist(title, notes);

  if (doplicate) {
    console.log(chalk.red("Doplicate Notes can't saved!"));
  } else {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green("Note Saved..."));
  }
}

//remove note
function removeNotes(title) {
  const notes = loadNotes();
  const exist = notes.length === 0 ? false : isNotesExist(title, notes);

  if (exist) {
    deleteNote(notes, title);
    saveNotes(notes);
    console.log(chalk.blue("Note Deleted..."));
  } else {
    console.log(chalk.red("Notes not found"));
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

function isNotesExist(title, notes) {
  const isDoplicate = notes.filter(function(note) {
    return note.title === title;
  });

  return isDoplicate.length === 0 ? false : true;
}

function deleteNote(notes, title) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      notes.splice(i, 1);
    }
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes
};
