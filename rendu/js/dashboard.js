import { GetListStorage, getLocalStorage } from "../storage.js";

document.addEventListener("DOMContentLoaded", () => {
  list();

    //cibler "state" pour pouvoir le modifier
    //const changeState = document.getElementById("mySelect").value = "";
});

export async function list() {
  const token = getLocalStorage("token");
  const tbody = document.querySelector("tbody");
  const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

  //Voir les noms des users
  const { data } = await axios.get(
    `http://greenvelvet.alwaysdata.net/bugTracker/api/users/${token}`
  );
  const users = data.result.user;

  //Voir les states

  console.log(data.result.user);

  return await axios
    .get(`http://greenvelvet.alwaysdata.net/bugTracker/api/list/${token}/0`)
    .then(function (response) {
      const { data } = response;
      console.log(data);
      data.result.bug.map((data) => {
        tbody.innerHTML += ` <tr>
            <td class="px-6 py-4">
            <p class="">${data.title}</p>
            <p class="text-gray-500 text-sm font-semibold tracking-wide text-justify">${
              data.description
            }</p>
        <br></td>
        <td class="px-6 py-4">
            <p class="">${new Intl.DateTimeFormat("fr-FR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(data.timestamp * 1000)}</p>
        </td>
        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">${
          data.user_id
        }</td>
        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">${
          users[data.user_id]
        }</td>
        <td class="px-6 py-4 text-center"> <select class="p-3 border-slate-500 border-2 rounded-md" name="select">
        <option  ${
          data.state === "0" ? "selected" : null
        }  value="0">Non traité</option>
        <option ${
          data.state === "1" ? "selected" : null
        } value="1">En cours</option>
        <option  ${
          data.state === "2" ? "selected" : null
        } value="2">Traité</option>
      </select></td>
        <td class="px-6 py-4 text-center"> <a href="#" class="text-purple-800 hover:underline">Supprimer</a> </td>
    </tr>`;

        console.log(response);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function chhangeState(token, bug_id, newState) {
  const { d } = await axios.get(
    `http://greenvelvet.alwaysdata.net/bugTracker/api/state/${token}/${bug_id}/${newState}`
  );
}
