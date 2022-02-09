const ingredients = ["Geraspte kaas", "Spinazie", "Knoflook"];

// console.log(ingredients);
// console.log(ingredients[1]);
// const step1 = "Doe " + ingredients[4] + " in de pan";
// console.log(step1);

// ingredients[2] = "lasagnebladen";
// console.log(ingredients)
//
// const ingredientsLength = ingredients.length;
// console.log(ingredientsLength)
//
// const lastIndex =ingredients.length - 1
// console.log(lastIndex)
// console.log(ingredients[lastIndex]);

const recipe = {
    name: 'spinazie lasagne',
    cookingTime: 45,
    isGlutenFree: false,
    ingredients: ["Geraspte kaas", "Spinazie", "Knoflook"],
    nutritionInfo: {
        natrium: 34,
        calories:670,
    },
}

recipe.name

console.log(recipe.natrium);


for (let i = 0; i < 10; i++) {
    console.log(i);
}