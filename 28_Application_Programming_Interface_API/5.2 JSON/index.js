import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// convert text into a JavaScript object
var parseJSON = JSON.parse(recipeJSON)


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {

  var recName = ''
  var ing1 = ''
  var ing2 = ''
  var top0 = ''
  var top1 = ''
  var top2 = ''
  var top3 = ''

  if (req.body['chicken'] === 'chicken') {
    recName = parseJSON[0]['name']
    ing1 = parseJSON[0]['ingredients']['protein']['name'] + ", " + parseJSON[0]['ingredients']['protein']['preparation']
    ing2 = parseJSON[0]['ingredients']['salsa']['name']
    top0 = parseJSON[0]['ingredients']['toppings'][0]['quantity'] + " of " + parseJSON[0]['ingredients']['toppings'][0]['name']
    top1 = parseJSON[0]['ingredients']['toppings'][1]['quantity'] + " of " + parseJSON[0]['ingredients']['toppings'][1]['name']
    top2 = parseJSON[0]['ingredients']['toppings'][2]['quantity'] + " of " + parseJSON[0]['ingredients']['toppings'][2]['name']
    top3 = parseJSON[0]['ingredients']['toppings'][3]['quantity'] + " of " + parseJSON[0]['ingredients']['toppings'][3]['name']

    res.render('index.ejs', {recName, ing1, ing2, top0, top1, top2, top3})

  } else if (req.body['beef'] === 'beef'){
    recName = parseJSON[1]['name']
    ing1 = parseJSON[1]['ingredients']['protein']['name'] + ", " + parseJSON[1]['ingredients']['protein']['preparation']
    ing2 = parseJSON[1]['ingredients']['salsa']['name']
    top0 = parseJSON[1]['ingredients']['toppings'][0]['quantity'] + " of " + parseJSON[1]['ingredients']['toppings'][0]['name']
    top1 = parseJSON[1]['ingredients']['toppings'][1]['quantity'] + " of " + parseJSON[1]['ingredients']['toppings'][1]['name']
    top2 = parseJSON[1]['ingredients']['toppings'][2]['quantity'] + " of " + parseJSON[1]['ingredients']['toppings'][2]['name']
    top3 = ''

    res.render('index.ejs', {recName, ing1, ing2, top0, top1, top2, top3})

  } else if (req.body['fish'] === 'fish'){
    recName = parseJSON[2]['name']
    ing1 = parseJSON[2]['ingredients']['protein']['name'] + ", " + parseJSON[2]['ingredients']['protein']['preparation']
    ing2 = parseJSON[2]['ingredients']['salsa']['name']
    top0 = parseJSON[2]['ingredients']['toppings'][0]['quantity'] + " of " + parseJSON[2]['ingredients']['toppings'][0]['name']
    top1 = parseJSON[2]['ingredients']['toppings'][1]['quantity'] + " of " + parseJSON[2]['ingredients']['toppings'][1]['name']
    top2 = parseJSON[2]['ingredients']['toppings'][2]['quantity'] + " of " + parseJSON[2]['ingredients']['toppings'][2]['name']
    top3 = ''

    res.render('index.ejs', {recName, ing1, ing2, top0, top1, top2, top3})
  }
  console.log(`Another way to tap into JS Objects: ${parseJSON[2].ingredients.protein.name}`)
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
