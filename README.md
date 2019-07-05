# matilda-apiclient-js

## Usage

```js
import MatildaAPI from 'matilda-apiclient'
const client = new MatildaAPI('https://example.com')
client.getLanguages()
  .then(res => res.json())
  .then(data => {
    console.log('languages', data);
  })
```

Generated package documentation can be found at https://paulvollmer.net/matilda-apiclient-js/
