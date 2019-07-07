import 'whatwg-fetch'

/**
 * MatildaAPI client
 */
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
    return window.fetch(`${this.apiBase}/word/${encodeURIComponent(word)}?lang=${lang}`)
  }

  /**
   * Get the dictionary of a word
   * @param {string} word The word to translate
   * @param {string} source The source language
   * @param {Array} target The target language
   * @return {Promise}
   */
  getDictionary(word, source, target) {
    return window.fetch(
      `${this.apiBase}/dictionary/${encodeURIComponent(word)}?source=${source}&target=${target.join(',')}`
    )
  }
}

export default MatildaAPI
