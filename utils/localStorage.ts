export enum LocalStorageKeys {
  MOVIE_DATA = 'movieData',
}

export function saveData(key: LocalStorageKeys, data: object) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getData(key: LocalStorageKeys) {
  const storedData = localStorage.getItem(key)
  return storedData ? JSON.parse(storedData) : ''
}

export function removeData(key: LocalStorageKeys) {
  localStorage.removeItem(key)
}
