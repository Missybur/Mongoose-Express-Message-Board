(function(){

  'use strict';

  $(document).ready(init);

  // Initialize data from local storage
  var tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  updateList();

  function init() {
    $('#add').click(addTodo);
    $('#list').on('change', 'input', checkboxChanged);
    $('#list').on('click', '.remove', removeTodo);
    // $("#list").on("click", "#edit", editContact );
  }

  function removeTodo(e) {
    var $target = $(e.target);
    var $targetRow = $target.closest('tr');

    var index = $targetRow.index();
    tasks.splice(index, 1);

    updateList();
    saveLocalStorage();
  }

  document.getElementById("editor").addEventListener("input", function() {
}, false);



  function checkboxChanged(e) {
    var $target = $(e.target);
    var $targetRow = $target.closest('tr');

    var index = $targetRow.index();
    tasks[index].completed = $target.is(':checked');

    updateList();
    saveLocalStorage();
  }

  function addTodo() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $("#phoneNumber").val();
    var message = $("#message").val();
    var email = $("#email").val();


    // var task = new Task(description, date);

    var task = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      message: message,
      email: email,
      completed: false
    };

    tasks.push(task);

    updateList();
    saveLocalStorage();
  }

  function updateList() {
    console.log('tasks:', tasks);
    $('#list').empty();

    if(tasks.length){
      $('table.table').show();
    } else {
      $('table.table').hide();
    }

    var taskElements = tasks.map(function(task){
      var $tr = $('#sample').clone();
      $tr.removeAttr('id');
      $tr.children('.firstName').text(task.firstName);
      $tr.children('.lastName').text(task.lastName);
      $tr.children('.phoneNumber').text(task.phoneNumber);
      $tr.children('.message').text(task.message);
      $tr.children('.email').text(task.email);
      $tr.find('input').prop('checked', task.completed);
      $tr.css({
        'text-decoration': task.completed ? 'line-through' : '',
        'color': task.completed ? '#aaa' : ''
      });
      $tr.show();
      return $tr;
    });

    $('#list').append(taskElements);
  }

  function saveLocalStorage() {
    localStorage.tasks = JSON.stringify(tasks);
  }

})();


// (function(){

//   'use strict';

//   $(document).ready(init);

//   // Initialize data from local storage
//   var messageInfo = localStorage.messageInfo ? JSON.parse(localStorage.messageInfo) : [];
//   updateList();

//   function init() {
//     $('#add').click(addMessage);
//     // $('#edit').on('click', 'input', editMessage);
//     $('#remove').on('click', '.remove', removeMessage);
//   }

//   function removeMessage(e) {
//     var $target = $(e.target);
//     var $targetRow = $target.closest('tr');

//     var index = $targetRow.index();
//     messageInfo.splice(index, 1);

//     updateList();
//     // saveLocalStorage();
//   }

//   function addMessage() {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var message = $("#message").val();

//     var messageInfo = {
//       firstName: firstName,
//       lastName: lastName,
//       message: message,
//     };

//     messageInfo.push(message);

//     updateList();
//     // saveLocalStorage();
//   }

//   function updateList() {
//     console.log('messageInfo:', messageInfo);
//     $('#list').empty();

//     if(messageInfo.length){
//       $('table.table').show();
//     } else {
//       $('table.table').hide();
//     }

//     var messageElements = messageInfo.map(function(message){
//       var $tr = $('#sample').clone();
//       $tr.removeAttr('id');
//       $tr.children('#firstName').text(message.firstName);
//       $tr.children('.lastName').text(message.lastName);
//       $tr.children('.message').text(message.message);
//       $tr.find('input').prop('checked', message.completed);
//       $tr.css({
//         'text-decoration': message.completed ? 'line-through' : '',
//         'color': message.completed ? '#aaa' : ''
//       });
//       $tr.show();
//       return $tr;
//     });

//     $('#list').append(messageElements);
//   }

//   // function saveLocalStorage() {
//   //   localStorage.tasks = JSON.stringify(tasks);
//   // }

// })();