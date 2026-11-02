const todoList = document.querySelector('.todo-list');

todoList.addEventListener('click', function (e) {

  const li = e.target.closest('li');

  if (li) {
    li.classList.toggle('completed');
  }
});