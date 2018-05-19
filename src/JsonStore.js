class JsonStore {
  set(key, value) {
    let json = JSON.stringify(value)
    localStorage.setItem(key, json);
  }
  _get(key) {
    return JSON.parse(localStorage.getItem(key))
  }
  get() {
    let config = this._get('config')
    if (!config){
      return {
        repetitionSeconds: 75,
        breakSeconds: 15,
        repetitions: 30,
        volume: 0.5
      }
    }
    return config
  }
}

export default JsonStore