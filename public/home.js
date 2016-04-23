'use strict';


$(()=>{

  $('.newTodo').click(openNewTodoModal);
  $('form.newTodoForm').submit(createNewTodo);
});

function createNewTodo(e) {
  e.preventDefault();

  var newTodo = {
    desc: $('#newTodoDesc').val(),
    dueDate: $('#newTodoDueDate').val(),
  };

  $('#newTodoDesc').val('');
  $('#newTodoDueDate').val('');

  $.post('/api/todos', newTodo)
    .done(() => {
      // rerender the DOM
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function openNewTodoModal() {
  $('.modal').modal('show');
}

