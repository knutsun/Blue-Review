![Blue Review](https://i.imgur.com/BgfgOg9.png)

## API


| Method | Endpoint                                 | Response                                                 |   
|--------|------------------------------------------|----------------------------------------------------------|
| GET    | `departments/`                           | Returns Police Departments                               |
| GET    | `department/{city} {state}/`             | Returns Police Department of {city} {state}              |
| GET    | `department/{city} {state}/officers/`    | Returns officer list of {city}, {state}'s Police Department|
| GET    | `department/{city} {state}/officer/{id}` | Returns specific officer of {city}, {state}'s Police Department|
