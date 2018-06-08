var friends = require('../data/friends.js');

var friendArray = [];


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

var friendArray = [];
var scoreArray = [];


//Takes friends from previous file and makes into useable array for page logic
function listfriends(){
      for(i = 0; i < friends.length; i++){
        friendArray.push(friends[i]);
      }
}


//Takes each friend's score and compares to user's scores
function compare() {
  for(i=0; i < friendArray.length; i++){
    var currentfriend = friendArray[i];
      for(i = 0; i < currentfriend.scores.length; i++){
        var totalDifference = [];
        totalDifference[i] = currentfriend.scores[i] - user.scores[i];
        function getSum(total,num){
          return total + num
        }
        function addScores (){
          var sum = totalDifference.reduce(getSum);
          return sum;
        }
        friendArray.push(sum);
      }
  }
}

  