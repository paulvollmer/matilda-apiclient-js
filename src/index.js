import queryString from 'query-string'
import 'whatwg-fetch'

class MatildaAPI {
  constructor(url) {
    this.apiBase = url
  }

  /**
   * Get a list of all supported languages
   * @return {Promise}
   */
  getLanguages() {
    return window.fetch(`${this.apiBase}/languages`)
  }

  /**
   * Get a word
   * @param {string} word The word to translate
   * @param {string} lang The language of the word
   * @return {Promise}
   */
  getWord(word, lang) {
    const query = queryString.stringify({ lang })
    return window.fetch(`${this.apiBase}/word/${encodeURIComponent(word)}?${query}`)
  }

  /**
   * Get the dictionary of a word
   * @param {string} word The word to translate
   * @param {string} source The source language
   * @param {Array} target The target language
   * @return {Promise}
   */
  getDictionary(word, source, target) {
    const query = queryString.stringify({ source, target })
    return window.fetch(`${this.apiBase}/dictionary/${encodeURIComponent(word)}?${query}`)
  }
}

export default MatildaAPI
