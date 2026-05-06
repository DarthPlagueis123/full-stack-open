sequenceDiagram
participant browser
participant server

    Note over browser: User writes a new note in the text field
    Note over browser: User clicks the Save button

    Note over browser: JavaScript intercepts the form submission
    Note over browser: Browser updates the notes list immediately

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: Request contains JSON data for the new note

    server-->>browser: HTTP 201 Created
    deactivate server

    Note over browser: No page reload occurs
    Note over browser: SPA stays on the same page and displays the new note
