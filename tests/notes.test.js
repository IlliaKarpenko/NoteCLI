import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insertDB: jest.fn(),
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDB, getDB, saveDB } = await import('../src/db.js');
const { newNote, getAllNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insertDB.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
});

test("newNote inserts data and returns it", async () => {
    const note = {
        content: "new note",
        id: 1,
        tags: ["work"]
    };
    insertDB.mockResolvedValue(note);

    const result = await newNote(note.content, note.tags);
    expect(result.tags).toEqual(note.tags);
    expect(result.content).toEqual(note.content);
});

test("getAllNotes returns all notes", async () => {
    const db = {
        notes: ["note1", "note2", "note3"]
    };
    getDB.mockResolvedValue(db);

    const result = await getAllNotes();
    expect(result).toEqual(db.notes);
});

test("removeNote does nothing if id is not found", async () => {
    const notes = [
        {id: 1, content: "note1"},
        {id: 2, content: "note2"},
        {id: 3, content: "note3"},
    ];
    getDB.mockResolvedValue({notes});
    saveDB.mockResolvedValue(notes);

    const idToRemove = 4;
    const result = await removeNote(idToRemove);
    expect(result).toBeNull();
    expect(saveDB).not.toHaveBeenCalled();
});