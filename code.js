const apiKey = "&app_key=0b7048362b8b3a9a7629e19a9d28b104";
const apiHealth = "&health=dairy-free";
const apiId = "&app_id=d4170b4a";
const userInput = $('#userinput');
const resultCard = $('.result')


$('button').click(function(){
  // console.log(userInput.val())
  resultCard.empty()

  $.ajax({
    // url: `${apiURL}${apiId}${apiKey}${apiHealth}`
    url: `https://api.edamam.com/search?q=${userInput.val()}${apiId}${apiKey}&health=vegan`
  }).done(function(data){
    console.log(data)


  })
})
