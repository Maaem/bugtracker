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

export function SetLocalStorage(data) {
  localStorage.setItem("token", data);
}

export function GetListStorage(data) {
  localStorage.setItem("users", data);
  localStorage.setItem("token", data);
}