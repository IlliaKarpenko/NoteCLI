/**
 * utils.js
 * 
 * This module provides utility functions for the Note application.
 * It includes helper functions for commonly used tasks, like displaying
 * lists of notes in a structured format.
 * 
 * Functions:
 * - listNotes(notes): Outputs an array of note objects with ID, content, and tags in a readable format.
 */

/**
 * Utility function to list notes.
 * 
 * @param {Array} notes - Array of note objects to list.
 */
export const listNotes = notes => {
    notes.forEach(({id, content, tags}) => {
      console.log("Id: ", id);
      console.log("Content: ", content);
      console.log("Tags: ", tags);
      console.log("\n");
    })
  };