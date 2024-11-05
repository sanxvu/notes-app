# Notes App with Firebase

## Description
A note-taking app built with React that allows users to create, update, and delete notes. This app integrates with Firebase to store and sync notes in real-time. It features a split layout with a sidebar to manage notes and an editor to view and modify selected notes.

## Features
- **Create New Notes**: Add new notes with a default markdown title and body.
- **Real-time Updates**: Notes are synced in real-time using Firebase’s onSnapshot for immediate updates to the app.
- **Update Notes**: Edit the content of your notes, with automatic saving after a brief delay (debouncing).
- **Delete Notes**: Remove notes from Firebase.
- **Responsive Layout**: The app uses a split layout with a sidebar for navigation and an editor for viewing and editing notes.
- **No Notes State**: If no notes exist, a prompt appears encouraging users to create one.

## Technologies Used
- **React**: JavaScript library for building the user interface.
- **Firebase**: Real-time database to store and sync notes.
- **React-Split**: For creating the split layout between the sidebar and editor.
- **React Hooks**: For managing state (useState), handling side effects (useEffect), and interacting with Firebase.

![Screenshot 2024-11-05 at 2 32 41 PM](https://github.com/user-attachments/assets/4ff45e68-d060-4d42-8ebb-82c724c3dac2)
