/**
 * db.js
 * This module handles database operations for storing and retrieving notes.
 * It provides functions to get the database contents, save updates to the database, 
 * and insert new notes into the database.
 * 
 * @module db
 */

import fs from "node:fs/promises";
import path from "node:path";

const DB_PATH = path.join(".", "db.json");

/**
 * Retrieves the current contents of the database.
 * 
 * @returns {Promise<Object>} A promise that resolves to the parsed contents of the database.
 *                            The returned object contains the notes and other data.
 * @throws {Error} If reading the file or parsing the JSON fails.
 */
export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(db);
};

/**
 * Saves the provided database object to the database file.
 * 
 * @param {Object} db - The database object to be saved.
 * @returns {Promise<Object>} A promise that resolves to the saved database object.
 * @throws {Error} If writing the file fails.
 */
export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2)); // Spaced out by 2 tabs
    return db;
};

/**
 * Inserts a new note into the database.
 * 
 * @param {Object} note - The note object to be inserted. This should contain 
 *                        the properties relevant to a note (e.g., content, id).
 * @returns {Promise<Object>} A promise that resolves to the inserted note object.
 * @throws {Error} If retrieving or saving the database fails.
 */
export const insertDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
};