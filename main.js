$(document).ready(function() {

  $("#add").click(function() {
    insertStudent()
    cycle()
  });
});

var students = []

function insertStudent() {
  var name = $("#name").val()
  var lastname = $("#lastname").val()
  var age = $("#age").val()

  var student = {
   name: name,
   lastname: lastname,
   age: age
  }
  students.push(student)
}

function cycle() {

  $("#print").html("")
  for (let i = 0; i < students.length; i++) {

   $("#print").append( "Student number: " + (i+1) + "<br>");
    for (const j in students[i]) {
      $("#print").append( j + " : " + students[i][j] + "<br>");
    }
  }
}
