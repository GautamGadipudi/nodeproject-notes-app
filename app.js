const _ = require('lodash');
const yargs = require('yargs');

const note = require('./note.js');

const titleOptions = {
  describe: 'Title of the note.',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Body of the note.',
  demand: true,
  alias: 'b'
}

var argv = yargs
  .command('add', 'Add new note.', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('read', 'Read an existing note.', {
    title: titleOptions
  })
  .command('readAll', 'Read all notes.')
  .command('remove', 'Remove an existing note.', {
    title: titleOptions
  })
  .help()
  .argv;
console.log(`Command: ${argv._[0]}`);
switch (argv._[0]) {
  case 'add':
    var newNote = note.add(argv.title, argv.body);
    console.log('--');
    if (newNote) {
      note.logNote(newNote);
      console.log('Note added successfully!');
    } else {
      console.log('Oops! This title is taken.');
      console.log('Note not added');
    }
    break;
  case 'remove':
    var isRemoved = note.remove(argv.title);
    console.log('--');
    if (isRemoved)
      console.log(`Note with title: ${argv.title} removed.`);
    else
      console.log(`Oops! Note with title: ${argv.title} does not exist.`);
    break;
  case 'read':
    var myNote = note.readNote(argv.title);
    console.log('--');
    if (myNote) {
      note.logNote(myNote);
    } else {
      console.log(`Oops! Note with title: ${argv.title} does not exist.`);
    }
    break;
  case 'readAll':
    var notes = note.readAll();
    console.log('--'  );
    if (notes.length != 0) {
      console.log(`Listing ${notes.length} notes.`);
      notes.forEach((notey) => note.logNote(notey));
    } else {
      console.log('No notes yet!');
    }
    break;
  default:
    console.log("Command not valid!");
}
