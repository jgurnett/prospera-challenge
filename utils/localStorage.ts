export enum LocalStorageKeys {
  MOVIE_DATA = 'movieData',
  APPLICATION_DATA = 'applicationData',
}

export function saveData(key: LocalStorageKeys, data: object) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getData(key: LocalStorageKeys) {
  const storedData = localStorage.getItem(key)
  return storedData ? JSON.parse(storedData) : ''
}

export function updateData(key: LocalStorageKeys, data: object) {
  const storedData = getData(key)
  return saveData(key, { ...storedData, ...data })
}

export function removeData(key: LocalStorageKeys) {
  localStorage.removeItem(key)
}
