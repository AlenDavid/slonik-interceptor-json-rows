# Slonik Json Interceptor

Transform [slonik](https://www.npmjs.com/package/slonik)'s QueryResultRow key into json-ready objects.

## API usage

```js
import { createPool } from 'slonik';

import JsonInterceptor from 'slonik-json-row-interceptor';

const pool = createPool(connectionString, {
  interceptors: [JsonInterceptor]
});

pool.connect(async (connection) => {
  const query = sql`select
    u.id,
    u.name,
    c.id as "cars.id",
    c.name as "cars.name"
  from
    users u
      join cars c
      on u.id = c.owner;`;

  const results = await connection.many(query);
  console.log(results); // [ { id: 1, name: 'Foo', cars: { id: 1, name: 'Bar' } } ]
});
```