# matilda-apiclient-js ![](https://img.shields.io/badge/version-0.1.5-blue.svg) [![Build Status](https://travis-ci.org/paulvollmer/matilda-apiclient-js.svg?branch=master)](https://travis-ci.org/paulvollmer/matilda-apiclient-js)

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

## License

MIT. See [LICENSE](LICENSE) for more details.
