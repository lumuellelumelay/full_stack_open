# full_stack_open
Repository for Full Stack open

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

# testing
```mermaid
sequenceDiagram
    actor User
    participant browser
    participant server

    User->>browser: creating a new note
    activate browser
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    Note rigth of browser: The from data is sent with HTTP POST to the server

    browser->>server: new GET request https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: Reloads the Notes page
    
```
