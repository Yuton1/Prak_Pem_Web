// Ambil elemen yang dibutuhkan
const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event untuk menambahkan tugas baru
addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    // Cek apakah input tidak kosong
    if (taskText === '') {
        alert('tolong isi');
        return;
    }

    // Buat elemen <li> baru
    const li = document.createElement('li');
    const taskTextNode = document.createElement('span');
    taskTextNode.classList.add('task-text');
    taskTextNode.textContent = taskText;

    // Tombol edit
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    const editIcon = document.createElement('img');
    editIcon.src = 'edit.svg';
    editIcon.classList.add('icon');
    editBtn.appendChild(editIcon)
    editBtn.addEventListener('click', () => toggleEditTask(li, editBtn));

    // Tombol delete
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'trash.svg';
    deleteIcon.classList.add('icon');
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener('click', () => deleteTask(li));

    // Tambahkan elemen ke dalam li
    li.appendChild(editBtn);
    li.appendChild(taskTextNode);
    li.appendChild(deleteBtn);

    // Tambahkan li ke dalam ul
    taskList.appendChild(li);

    // Kosongkan input
    taskInput.value = '';
}

function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Fungsi untuk toggle edit dan simpan task
function toggleEditTask(taskItem, editBtn) {
    const currentMode = editBtn.querySelector('img').src.includes('edit.svg');

    if (currentMode) {
        // Ganti dari mode view ke mode edit
        const taskTextNode = taskItem.querySelector('.task-text');
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.classList.add('task-input-edit');
        inputField.value = taskTextNode.textContent;

        // Ganti tombol jadi save
        editBtn.querySelector('img').src = 'save.svg';

        // Ganti span task-text dengan inputField
        taskItem.replaceChild(inputField, taskTextNode);

    } else {
        // Ganti dari mode edit ke mode view (simpan perubahan)
        const inputField = taskItem.querySelector('.task-input-edit');
        const newTaskText = inputField.value.trim();

        // Validasi jika kosong
        if (newTaskText === '') {
            alert('Task cannot be empty!');
            return;
        }

        const newTaskTextNode = document.createElement('span');
        newTaskTextNode.classList.add('task-text');
        newTaskTextNode.textContent = newTaskText;

        // Kembalikan tombol edit
        editBtn.querySelector('img').src = 'edit.svg';

        // Ganti inputField dengan span task-text
        taskItem.replaceChild(newTaskTextNode, inputField);
    }
}
