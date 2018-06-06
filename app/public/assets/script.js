$("#submit").on('click', function(){
  event.preventDefault();

  var a1 = $('a1').val().trim();
  var a2 = $('a2').val().trim();
  var a3 = $('a3').val().trim();
  var a4 = $('a4').val().trim();
  var a5 = $('a5').val().trim();
  var a6 = $('a6').val().trim();
  var a7 = $('a7').val().trim();
  var a8 = $('a8').val().trim();
  var a9 = $('a9').val().trim();
  var a10 = $('a10').val().trim();

  var friendAdded = {
    name: $('#name').val().trim(),
    photo: $('#photo').val().trim(),
    scores:[
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10
    ]
  }
  console.log(friendAdded)

  var check = function(data){
    if(data == true){
      console.log("Friend added");
    } if (data == false){
      console.log("No friend added");
    }
  };

  $.ajax({
    type: 'POST',
    url:"api/friends",
    contentType: "application/json",
    data: JSON.stringify(friendAdded),
    check: check,
  }).done(function(data){
      $('#')
  })
});