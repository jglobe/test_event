const data = [
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


function addUser(inputNameValue, inputSecondNameValue, inputAgeValue) {
    let tr=document.createElement('tr');
    tr.innerHTML = `            
    <td>${inputNameValue}</td>
    <td>${inputSecondNameValue}</td>
    <td>${inputAgeValue}</td>
    `;
    addTdWithBtns(tr);
    tbody.append(tr);
}
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

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }
    addTdWithBtns(tr);
    tbody.append(tr);
}

function addModalForm () {
    formEditUser.reset();
    formEditUser.classList.add('modal_form');
    formEditUser.classList.remove('modal_form_hidden');
    let editTr = this.closest('tr');
    formEditUser.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputEditNameValue = e.target.querySelector('.edit_name').value;
        let inputEditSecondNameValue = e.target.querySelector('.edit_second_name').value;
        let inputEditAgeValue = e.target.querySelector('.edit_age').value;
        editTr.innerHTML=`
    <td>${inputEditNameValue}</td>
    <td>${inputEditSecondNameValue}</td>
    <td>${inputEditAgeValue}</td>
    `;
    addTdWithBtns(editTr);
    formEditUser.classList.add('modal_form_hidden');
    formEditUser.classList.remove('modal_form');
    });
    
    
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

