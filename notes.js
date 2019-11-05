const fs = require("fs");

// get notes
function getNotes() {
  return "Your notes";
}

// add notes

function addNote(title, body) {
  const notes = loadNotes();

  notes.push({ title: title, body: body });

  saveNotes(notes);
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
