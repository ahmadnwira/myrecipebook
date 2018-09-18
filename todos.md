# My Recipe Book

- Any user can
    - explore recipes
    - filter by category
    - search by title [use sql fulltext search or !!]

- Logedin user
    - can save recipes to their personal page
    - ...

- Admin
    - can CRUD recipes, users

- More Features
    ...

## API

| Method | Path                 | Return       |
| ------ |--------------------- | ------------:|
| GET    | /api/recipe          |   show all   |
| GET    | /api/recipe/{slug}   |   details    |
| GET    | /api/recipe/featured |   featured   |
| PUT    | /api/recipe/{slug}   |   update     |
| DELETE  | /api/recipe/{slug}  |   delete     |