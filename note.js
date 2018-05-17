const fs = require('fs');

var fetchNotes = (isDuplicate) => {
  var file = './data/notes.json';
  if (isDuplicate) {
    file = './data/duplicate-notes.json'
  }
  try {
    var notesString = fs.readFileSync(file);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var writeNotes = (notes, isDuplicate) => {
  var file = './data/notes.json';
  if (isDuplicate) {
    file = './data/duplicate-notes.json'
  }
  var notesString = JSON.stringify(notes);
  fs.writeFileSync(file, notesString);
}

var add = (title, body) => {
  var newNote = {
    title: title,
    body: body
  };
  var notes = fetchNotes();
  if (notes.filter(note => note.title == newNote.title).length == 0) {
    notes.push(newNote);
    writeNotes(notes, false);
    return newNote;
  } else {
    var dupNotes = fetchNotes(true);
    dupNotes.push(newNote);
    writeNotes(dupNotes, true);
    return undefined;
  }
}

var remove = (title) => {
  var notes = fetchNotes(false);
  var updatedNotes = notes.filter(note => note.title != title);
  if (updatedNotes.length == notes.length) {
    return false;
  } else {
    writeNotes(updatedNotes);
    return true;
  }
}

var readNote = (title) => {
  var notes = fetchNotes(false);
  var note = notes.filter(note => note.title == title);
  return note[0];
}

var readAll = () => {
  var notes = fetchNotes(false);
  return  notes;
}

var logNote = (note) => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  add,
  remove,
  readNote,
  readAll,
  logNote
}
