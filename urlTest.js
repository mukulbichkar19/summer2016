
var unirest = require('unirest');

var result = unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?metaInformation=false&number=10&query=appl")
.header("X-Mashape-Key", "jQhv98FQvGmshYepTn0nHNp1sR4xp1QxF3OjsnvqV92i2qXovn")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

console.log(result);