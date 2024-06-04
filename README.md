Tools/Languages allowed :
1)	Code Editor of your choice
2)	Node/Express
3)	TypeScript

Duration : 30 mins.

Objective:
Create a simple RESTful API that manages a to-do list and includes a feature to fetch a random inspirational quote using Node.js and Express.

Requirements:

Back-End:
Set up a basic Express application.
Implement the following endpoints:
Add a new to-do item (POST /todo)
Get the list of to-do items (GET /todo)
Fetch a random inspirational quote (GET /quote)
Store to-do items in-memory (no need for a database).
Fetch quotes from a public API (e.g., "https://api.quotable.io/random").


## Entities:
### ToDo
To-Do Item (database):
Each to-do item should have the following fields:
- id (unique identifier)
- task (string)
- completed (boolean, default is false)

### Quote
Inspirational Quote:
The quote should be fetched from the public quotes API and returned as a JSON response.


JSON from random api
```

  "_id": "mfGS-lWf2bFD",
  "content": "When you reach the end of your rope, tie a knot in it and hang on.",
  "author": "Franklin D. Roosevelt",
  "tags": [
    "Famous Quotes",
    "Inspirational"
  ],
  "authorSlug": "franklin-d-roosevelt",
  "length": 66,
  "dateAdded": "2019-03-24",
  "dateModified": "2023-04-14"
}
```