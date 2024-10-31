## Modules

<dl>
<dt><a href="#module_db">db</a></dt>
<dd><p>db.js
This module handles database operations for storing and retrieving notes.
It provides functions to get the database contents, save updates to the database, 
and insert new notes into the database.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#newNote">newNote</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Creates a new note and saves it to the database.</p>
</dd>
<dt><a href="#getAllNotes">getAllNotes</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Retrieves all notes from the database.</p>
</dd>
<dt><a href="#findNotes">findNotes</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Finds notes that contain the specified filter string in their content.</p>
</dd>
<dt><a href="#removeNote">removeNote</a> ⇒ <code>Promise.&lt;(number|null)&gt;</code></dt>
<dd><p>Removes a note by its ID from the database.</p>
</dd>
<dt><a href="#removeAllNotes">removeAllNotes</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Overwrites the database with an empty array of notes.</p>
</dd>
<dt><a href="#listNotes">listNotes</a></dt>
<dd><p>Utility function to list notes.</p>
</dd>
</dl>

<a name="module_db"></a>

## db
db.jsThis module handles database operations for storing and retrieving notes.It provides functions to get the database contents, save updates to the database, and insert new notes into the database.


* [db](#module_db)
    * [.getDB](#module_db.getDB) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.saveDB](#module_db.saveDB) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.insertDB](#module_db.insertDB) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="module_db.getDB"></a>

### db.getDB ⇒ <code>Promise.&lt;Object&gt;</code>
Retrieves the current contents of the database.

**Kind**: static constant of [<code>db</code>](#module_db)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the parsed contents of the database.                           The returned object contains the notes and other data.  
**Throws**:

- <code>Error</code> If reading the file or parsing the JSON fails.

<a name="module_db.saveDB"></a>

### db.saveDB ⇒ <code>Promise.&lt;Object&gt;</code>
Saves the provided database object to the database file.

**Kind**: static constant of [<code>db</code>](#module_db)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the saved database object.  
**Throws**:

- <code>Error</code> If writing the file fails.


| Param | Type | Description |
| --- | --- | --- |
| db | <code>Object</code> | The database object to be saved. |

<a name="module_db.insertDB"></a>

### db.insertDB ⇒ <code>Promise.&lt;Object&gt;</code>
Inserts a new note into the database.

**Kind**: static constant of [<code>db</code>](#module_db)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the inserted note object.  
**Throws**:

- <code>Error</code> If retrieving or saving the database fails.


| Param | Type | Description |
| --- | --- | --- |
| note | <code>Object</code> | The note object to be inserted. This should contain                         the properties relevant to a note (e.g., content, id). |

<a name="newNote"></a>

## newNote ⇒ <code>Promise.&lt;Object&gt;</code>
Creates a new note and saves it to the database.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the newly created note object.  
**Throws**:

- <code>Error</code> If inserting the note or saving to the database fails.


| Param | Type | Description |
| --- | --- | --- |
| note | <code>string</code> | The content of the new note. |
| tags | <code>Array.&lt;string&gt;</code> | An array of tags associated with the note. |

<a name="getAllNotes"></a>

## getAllNotes ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Retrieves all notes from the database.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - A promise that resolves to an array of notes.  
**Throws**:

- <code>Error</code> If retrieving notes from the database fails.

<a name="findNotes"></a>

## findNotes ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Finds notes that contain the specified filter string in their content.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - A promise that resolves to an array of matching notes.  
**Throws**:

- <code>Error</code> If retrieving notes from the database fails.


| Param | Type | Description |
| --- | --- | --- |
| filter | <code>string</code> | The string to filter notes by. |

<a name="removeNote"></a>

## removeNote ⇒ <code>Promise.&lt;(number\|null)&gt;</code>
Removes a note by its ID from the database.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;(number\|null)&gt;</code> - A promise that resolves to the ID of the removed note, or null if not found.  
**Throws**:

- <code>Error</code> If retrieving or saving the database fails.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the note to remove. |

<a name="removeAllNotes"></a>

## removeAllNotes ⇒ <code>Promise.&lt;Object&gt;</code>
Overwrites the database with an empty array of notes.

**Kind**: global constant  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the empty notes object.  
**Throws**:

- <code>Error</code> If saving the empty notes array fails.

<a name="listNotes"></a>

## listNotes
Utility function to list notes.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| notes | <code>Array</code> | Array of note objects to list. |

