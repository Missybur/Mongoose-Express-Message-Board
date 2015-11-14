// // (function(){

//   'use strict';

$(document).ready(init);

var newRoom;
var newItem;

var roomInfo = localStorage.roomInfo ? JSON.parse(localStorage.roomInfo) : [];
var itemInfo = localStorage.itemInfo ? JSON.parse(localStorage.itemInfo) : [];

  // updateList();

  function init() {
    $('#add').click(addRoom);
    // $('#addItem').click(addItem);
    $("#itemButton").click(addItem);
    // $('#list').on('click', '.remove', removeRoom);
    // $("#list").on("click", "#edit", editMessagePost);
    getRooms();
    getItems();
  }

  function getRooms(){

    $.get("/rooms")
    .done(function(data){
      console.log(data);
      appendRooms(data);
    })

    .fail(function(err){
      console.log(err)
    });
  }

  function getItems(){

    $.get("/items")
    .done(function(data){
      console.log(data);
      appendItems(data);
    })

    .fail(function(err){
      console.log(err)
    });
  }

//   function removeRoom(e) {
//     var $target = $(e.target);
//     var $targetRow = $target.closest('tr');

//     var index = $targetRow.index();
//     roomInfo.splice(index, 1);

//     var messageBoard = $("#messageBoard").val();
//      $.ajax({
//       type: "DELETE",
//       url: "/",
//       data: {string : messageBoard},
//     })

//     updateList();
//   }

  // function editMessagePost(e){

  //   document.getElementById("editor").addEventListener("input", function() {
  //     // alert("Click on the input boxes below to edit content!")
  // }, false);
  // }

function addRoom(event) {
  event.preventDefault();
  var newRoom = $('#input').val();
  $.ajax({
    type: "POST",
    url: "/rooms",
    data: {name : newRoom},
  })

  .done(function(data){
    console.log(data);
    getRooms();
  })
  .fail(function(err){
    console.log(err)
  });

}

function appendRooms(rooms){
  event.preventDefault();
  var newRow = {}
  // var roomAdded = $("#input").val();

  for (var i = 0; i < rooms.length; i++){
    var newRow = $("<tr/>");
    $("#list").append(newRow);

  newRow.append($("<td>" + rooms[i].name + "</td>" + "<td>" + "<input id=itemId placeholder=Item>" + "</input>" + "<button id=itemButton>" + "</td>" + "<td id=roomItems>" + "</td>" + "<td>" + "</td>"))
  }

  return newRow
    roomInfo.push(newRow);
}
  // Location.reload();

function appendItems(items){
  var itemRow = {}
  var itemAdded = $("#inputItem").val();

  for (var i = 0; i < items.length; i++){
    var newItem = $("<tr>" + itemAdded + "</tr>");
    $("#roomItems").append(newItem);

  var newnewItem = newItem.append($("<td id=roomItems>" + items[i].name + "</td>" ))
  console.log(newnewItem)
  }
    // itemInfo.push(itemData);

}

// $("#itemButton").click(function(){
//   var newRoomItem = $("#itemId").val();
//   newRoomItem.append()
//   ($("#itemId").val()){
//     $("#roomItems").append(newItem)
//   }
// })





//   }

//   function updateList() {
//     console.log('roomInfo:', roomInfo);
//     $('#list').empty();

//     if(roomInfo.length){
//       $('table.table').show();
//     } else {
//       $('table.table').hide();
//     }

//     var messageElements = roomInfo.map(function(messageData){
//       var $tr = $('#sample').clone();
//       $tr.removeAttr('id');
//       $tr.children('.firstName').text(messageData.firstName);
//       $tr.children('.lastName').text(messageData.lastName);
//       $tr.children('.message').text(messageData.message);
//       $tr.find('input').prop('checked', messageData.completed);
//       $tr.css({
//         'text-decoration': messageData.completed ? 'line-through' : '',
//         'color': messageData.completed ? '#aaa' : ''
//       });
//       $tr.show();
//       return $tr;
//     });

//     $('#list').append(messageElements);
//   }

// // })();

