// Connexion

export function getTokenStorage() {
    return window.localStorage.getItem("token");
}
export function getLocalStorage(key) {
    return window.localStorage.getItem(key);
}

// Deconnexion

export function removeTokenStorage(key) {
  return window.localStorage.removeItem(key);
}

// Dashboard list

export function SetLocalStorage(data,key) {
  localStorage.setItem(key, data);
}

// Recuperer la liste des bugs
export function GetListStorage(data) {
  localStorage.setItem("token", data);
}