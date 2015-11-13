(function(){

  'use strict';

  $(document).ready(init);

  var messageInfo = localStorage.messageInfo ? JSON.parse(localStorage.messageInfo) : [];
  updateList();


  function init() {
    $('#add').click(addMessage);
    $('#list').on('click', '.remove', removeMessage);
    $("#list").on("click", "#edit", editMessagePost);
  }

  function removeMessage(e) {
    var $target = $(e.target);
    var $targetRow = $target.closest('tr');

    var index = $targetRow.index();
    messageInfo.splice(index, 1);

    var messageBoard = $("#messageBoard").val();
     $.ajax({
      type: "DELETE",
      url: "/",
      data: {string : messageBoard},
    })

    updateList();
  }

  function editMessagePost(e){

    document.getElementById("editor").addEventListener("input", function() {
      alert("Click on the input boxes below to edit content!")
  }, false);
  }

  function addMessage() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var message = $("#message").val();
    var date = $("#date").val();

    var messageBoard = $("#messageBoard").val();
    $.ajax({
      type: "POST",
      url: "/",
      data: {string : messageBoard},
    })

      .done(function(data){
    var htmlOutput = ($(`${data}`))
    $("#html").append(htmlOutput)
  })
  .fail(function(err){
    console.log(err)
  });

    var messageData = {
      firstName: firstName,
      lastName: lastName,
      message: message,
      date: date
    };

    messageInfo.push(messageData);

    updateList();
  }

  function updateList() {
    console.log('messageInfo:', messageInfo);
    $('#list').empty();

    if(messageInfo.length){
      $('table.table').show();
    } else {
      $('table.table').hide();
    }

    var messageElements = messageInfo.map(function(messageData){
      var $tr = $('#sample').clone();
      $tr.removeAttr('id');
      $tr.children('.firstName').text(messageData.firstName);
      $tr.children('.lastName').text(messageData.lastName);
      $tr.children('.message').text(messageData.message);
      $tr.find('input').prop('checked', messageData.completed);
      $tr.css({
        'text-decoration': messageData.completed ? 'line-through' : '',
        'color': messageData.completed ? '#aaa' : ''
      });
      $tr.show();
      return $tr;
    });

    $('#list').append(messageElements);
  }

})();

