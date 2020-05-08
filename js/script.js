const users = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];
const addUserBtn = document.querySelector('.add_user_btn');
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');
const formEditUser = document.querySelector('.modal_form_hidden');
const cancelBtn = document.querySelector('.cancel_btn');
let editRowId = null;

function addUser(inputNameValue, inputSecondNameValue, inputAgeValue) {
    let tr = document.createElement('tr');
    tr.id =`row-${Math.round(Math.random()*10000)}`;
    tr.innerHTML = `            
    <td class='first-name'>${inputNameValue}</td>
    <td class='last-name'>${inputSecondNameValue}</td>
    <td class='age'>${inputAgeValue}</td>
    `;
    addTdWithBtns(tr);
    tbody.append(tr);
}
users.forEach(user => addUser(user.firstName, user.lastName, user.age));

function deleteUser() {
    let deleteTr = this.closest('tr');
    deleteTr.remove();
}
function addTdWithBtns(tr) {
    let deleteUserBtn = document.createElement('button');
    let editUserBtn = document.createElement('button');
    let btnsTd = document.createElement('td');
    
    deleteUserBtn.className = 'delete_user_btn';
    editUserBtn.className = 'edit_user_btn';
    btnsTd.className = 'btns_td';

    deleteUserBtn.addEventListener('click', deleteUser);
    editUserBtn.addEventListener('click', addModalForm);
    
    deleteUserBtn.innerHTML = 'delete';
    editUserBtn.innerHTML = 'edit';

    btnsTd.append(editUserBtn);
    btnsTd.append(deleteUserBtn);
    tr.append(btnsTd);
}

formEditUser.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputEditNameValue = e.target.querySelector('.edit_name').value;
    let inputEditSecondNameValue = e.target.querySelector('.edit_second_name').value;
    let inputEditAgeValue = e.target.querySelector('.edit_age').value;
    let editTr = document.querySelector(`#${editRowId}`);
    editTr.innerHTML=`
<td>${inputEditNameValue}</td>
<td>${inputEditSecondNameValue}</td>
<td>${inputEditAgeValue}</td>
`;
addTdWithBtns(editTr);
formEditUser.classList.add('modal_form_hidden');
formEditUser.classList.remove('modal_form');
formEditUser.reset();
});

function addModalForm () {
    
    let editTr = this.closest('tr');
    editRowId = editTr.id;
    let oldFirstName = editTr.querySelector('.first-name').innerText;
    let oldSLastName = editTr.querySelector('.last-name').innerText;
    let oldAge = editTr.querySelector('.age').innerText;

    let inputFirstName = document.querySelector('.edit_name');
    inputFirstName.value = oldFirstName;
    let inputLastName = document.querySelector('.edit_second_name');
    inputLastName.value = oldSLastName;
    let inputAge = document.querySelector('.edit_age');
    inputAge.value = oldAge;
    
    formEditUser.classList.add('modal_form');
    formEditUser.classList.remove('modal_form_hidden');
};
function hideModalForm () {

    formEditUser.classList.add('modal_form_hidden');
    formEditUser.classList.remove('modal_form');
    
}    
formAddUser.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNameValue = event.target.querySelector('.input_name').value;
    let inputSecondNameValue = event.target.querySelector('.input_second_name').value;
    let inputAgeValue = event.target.querySelector('.input_age').value;
    addUser(inputNameValue, inputSecondNameValue, inputAgeValue);
    formAddUser.reset();
});

cancelBtn.addEventListener('click', hideModalForm);

