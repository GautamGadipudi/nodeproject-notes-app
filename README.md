# nodeproject-notes-app
A very short note taking app created while learning the basics of Node. There is no database invovled. The notes are stored in a file.

This application will require Node on your system with version 8.x.x

* Step 1 - Download/Clone the repository to your local machine.
* Step 2 - Fire up your terminal/command prompt/power shell in the root folder of the downloaded file.
* Step 3 - Run the following command in your terminal to install all the required packages.

    ```shell
    npm install
    ```
* Step 4 - Use the below command to add a note:

    ```shell
    node app.js add --title="Your note title" --body="Your note body"
    ```
    
    The above command will add a note to the file data/notes.json.
    
 #### Commands Usage:
 
 ###### add:
 To add a new note.
 
   ```shell
   node app.js add --title="Title of note to be added" --body="Body of note to be added"
   ```
   > Note: The title must be unique w.r.t the already added notes. Only then will the note be added to the file.
 
 ###### remove:
 To remove an existing note.
 
   ```shell
   node app.js remove --title="Title of note to be removed"
   ```
   > Note: A note with the given title must be present in data/notes.json inorder to delete it.
 
 ###### read: 
 To read an existing note.
 
   ```shell
   node app.js read --title="Title of note to be read"
   ```
   > Note: Again, a note with the given title must be present in data/notes.json inorder to read it.
 
 ###### readAll: 
 To read all existing notes.
 
   ```shell 
   node app.js readAll
   ```
 
 ###### help:
   If at any moment, you do not understand the syntax, use the <code>--help</code> tag after the command to see usage. For eg.

   ```shell
   node app.js --help
   ``` 
   OR  
   ```shell
   node app.js <command> --help
   ```
