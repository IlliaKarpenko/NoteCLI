/**
 * command.js
 * 
 * This file configures the CLI commands for the Note application using yargs.
 * Available commands allow users to create, retrieve, search, and delete notes, 
 * as well as start a web server for viewing notes (web server not implemented yet).
 * 
 * Commands:
 * - new <note>         : Creates a new note with optional tags.
 * - all                : Lists all notes in the database.
 * - find <filter>      : Finds and lists notes matching a filter keyword.
 * - remove <id>        : Deletes a specific note by ID.
 * - clean              : Deletes all notes.
 * - web [port]         : Launches a web server for viewing notes. Not implemented yet
 * 
 * Options:
 * - --tags, -t <tags>  : Adds tags to a new note (comma-separated).
 */

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { findNotes, getAllNotes, newNote, removeAllNotes, removeNote } from './notes.js';
import { listNotes } from './utils.js';

// CLI Command Configuration
yargs(hideBin(process.argv))
  .command("new <note>", "Create a new note", yargs => {
    return yargs.positional("note", {
        type: "string",
        description: "The content of the note",
    });
  }, async (argv) => {
    const tags = argv.tags ? argv.tags.split(',') : [];
    const note = await newNote(argv.note, tags);
    console.log("New note created.", note);
  })

  .command("all", "List all notes", () => {}, async (argv) => {
    const notes = await getAllNotes();
    listNotes(notes);
  })

  .command("find <filter>", "Find matching notes", yargs => {
    return yargs.positional("note", {
      type: "string",
      description: "The word from the note you're looking for"
    });
  }, async (argv) => {
    const notes = await getAllNotes();
    const matches = await findNotes(argv.filter);
    listNotes(matches);
  })

  .command("remove <id>", "Delete a note using note id", yargs => {
    return yargs.positional("note", {
      type: "number",
      description: "The id of the note you want to delete"
    });
  }, async (argv) => {
    const id = await removeNote(argv.id);
    console.log("Note ", id, " was deleted.");
  })

  .command("clean", "Delete all notes", () => {}, async (args) => {
    await removeAllNotes();
    console.log("All notes were deleted");
  })

  .command("web [port]", "Launch a website to see the notes", yargs => {
    return yargs.positional("port", {
      describe: "Port to bind on",
      default: 5000,
      type: "number"
    });
  }, async (argv) => {
    // TODO: Web server functionality
  })

  .option("tags", {
    alias: "t",
    type: "string",
    description: "Tags to add to the note"
  })

  .demandCommand(1)
  .parse();