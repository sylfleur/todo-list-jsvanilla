//Récupération du formulaire
const form = document.forms[1];
const tBody = document.querySelector('tbody');
const dataDisplay = document.querySelector('.data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    data = form.elements[0].value;
    tBody.innerHTML += addTask(data); 
});

function addTask(data) {
    return
    `<tr>
    <th scope="row"><input class="form-check-input mt-0" type="checkbox" value=""></th>
    <td>${data}</td>
    <td>
        <button type="button" class="btn btn-warning">Modifier</button>
        <button type="button" class="btn btn-danger">Supprimer</button>
    </td>
    </tr>`
}