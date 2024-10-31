import {insertDB, getDB, saveDB} from "./db.js";

/**
 * Creates a new note and saves it to the database.
 * 
 * @param {string} note - The content of the new note.
 * @param {Array<string>} tags - An array of tags associated with the note.
 * @returns {Promise<Object>} A promise that resolves to the newly created note object.
 * @throws {Error} If inserting the note or saving to the database fails.
 */
export const newNote = (note, tags) => {
    const newNote = {
        tags,
        content: note,
        id: Date.now(),
    };

    return insertDB(newNote)
        .then(() => newNote)
        .catch(error => {
            console.error("Error creating new note:", error);
            throw new Error("Failed to create new note");
        });
};


/**
 * Retrieves all notes from the database.
 * 
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of notes.
 * @throws {Error} If retrieving notes from the database fails.
 */
export const getAllNotes = () => {
    return getDB()
        .then(({ notes }) => notes)
        .catch(error => {
            console.error("Error retrieving all notes:", error);
            throw new Error("Failed to retrieve notes");
        });
};

/**
 * Finds notes that contain the specified filter string in their content.
 * 
 * @param {string} filter - The string to filter notes by.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of matching notes.
 * @throws {Error} If retrieving notes from the database fails.
 */
export const findNotes = (filter) => {
    return getDB()
        .then(({ notes }) => notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase())))
        .catch(error => {
            console.error("Error finding notes:", error);
            throw new Error("Failed to find notes");
        });
};

/**
 * Removes a note by its ID from the database.
 * 
 * @param {number} id - The ID of the note to remove.
 * @returns {Promise<number|null>} A promise that resolves to the ID of the removed note, or null if not found.
 * @throws {Error} If retrieving or saving the database fails.
 */
export const removeNote = (id) => {
    return getDB()
        .then(({ notes }) => {
            const match = notes.find(note => note.id === id);
            if (!match) return null;
            const newNotes = notes.filter(note => note.id !== id);
            return saveDB({ notes: newNotes }).then(() => id);
        })
        .catch(error => {
            console.error("Error removing note:", error);
            throw new Error("Failed to remove note");
        });
};

/**
 * Overwrites the database with an empty array of notes.
 * 
 * @returns {Promise<Object>} A promise that resolves to the empty notes object.
 * @throws {Error} If saving the empty notes array fails.
 */
export const removeAllNotes = () => {
    return saveDB({ notes: [] })
        .catch(error => {
            console.error("Error removing all notes:", error);
            throw new Error("Failed to remove all notes");
        });
};