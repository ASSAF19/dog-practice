$(".btn").on("click", function () {
  $.get('/dogs').then(function (data) {
let dogs=data; 
var source = $('#dogs-template').html();
var template = Handlebars.compile(source);
let newHTML=template({dogs})
$("#ma").append(newHTML);
  });
})