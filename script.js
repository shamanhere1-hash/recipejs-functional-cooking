// ------------------ Recipe Data ------------------
// Original data NEVER changes (important for functional programming)
const recipes = [
{ id: 1, title: &quot;Classic Spaghetti Carbonara&quot;, time: 25, difficulty: &quot;easy&quot;, description: &quot;A creamy
Italian pasta dish.&quot;, category: &quot;pasta&quot; },
{ id: 2, title: &quot;Chicken Tikka Masala&quot;, time: 45, difficulty: &quot;medium&quot;, description: &quot;Tender
chicken in spiced sauce.&quot;, category: &quot;curry&quot; },
{ id: 3, title: &quot;Homemade Croissants&quot;, time: 180, difficulty: &quot;hard&quot;, description: &quot;Buttery
French pastries.&quot;, category: &quot;baking&quot; },
{ id: 4, title: &quot;Greek Salad&quot;, time: 15, difficulty: &quot;easy&quot;, description: &quot;Fresh vegetables and
feta.&quot;, category: &quot;salad&quot; },
{ id: 5, title: &quot;Beef Wellington&quot;, time: 120, difficulty: &quot;hard&quot;, description: &quot;Beef wrapped in
pastry.&quot;, category: &quot;meat&quot; },
{ id: 6, title: &quot;Vegetable Stir Fry&quot;, time: 20, difficulty: &quot;easy&quot;, description: &quot;Quick mixed
vegetables.&quot;, category: &quot;vegetarian&quot; },

{ id: 7, title: &quot;Pad Thai&quot;, time: 30, difficulty: &quot;medium&quot;, description: &quot;Thai noodles with
sauce.&quot;, category: &quot;noodles&quot; },
{ id: 8, title: &quot;Margherita Pizza&quot;, time: 60, difficulty: &quot;medium&quot;, description: &quot;Classic pizza.&quot;,
category: &quot;pizza&quot; }
];

// ------------------ DOM Elements ------------------
const recipeContainer = document.querySelector(&quot;#recipe-container&quot;);
const filterButtons = document.querySelectorAll(&quot;.filters button&quot;);
const sortButtons = document.querySelectorAll(&quot;.sorts button&quot;);

// ------------------ App State ------------------
// State variables control what is shown
let currentFilter = &quot;all&quot;;
let currentSort = &quot;none&quot;;

// ------------------ Pure Functions ------------------

// Creates HTML for ONE recipe card (pure function)
const createRecipeCard = (recipe) =&gt; `
&lt;div class=&quot;recipe-card&quot;&gt;
&lt;h3&gt;${recipe.title}&lt;/h3&gt;
&lt;p&gt;${recipe.time} min | ${recipe.difficulty}&lt;/p&gt;
&lt;p&gt;${recipe.description}&lt;/p&gt;
&lt;/div&gt;

`;

// Filters recipes based on current filter (pure)
const filterRecipes = (recipes, filter) =&gt; {
if (filter === &quot;all&quot;) return recipes;

if (filter === &quot;quick&quot;) {
return recipes.filter(r =&gt; r.time &lt;= 30);
}

return recipes.filter(r =&gt; r.difficulty === filter);
};

// Sorts recipes based on current sort (pure)
const sortRecipes = (recipes, sortType) =&gt; {
if (sortType === &quot;name&quot;) {
return [...recipes].sort((a, b) =&gt; a.title.localeCompare(b.title));
}

if (sortType === &quot;time&quot;) {
return [...recipes].sort((a, b) =&gt; a.time - b.time);
}

return recipes; // default (no sorting)

};

// ------------------ Render ------------------

// Displays recipes on the page
const renderRecipes = (recipesToRender) =&gt; {
recipeContainer.innerHTML = recipesToRender
.map(createRecipeCard)
.join(&quot;&quot;);
};

// ------------------ Update Display ------------------
// Central function (VERY IMPORTANT FOR KALVIUM)
const updateDisplay = () =&gt; {
const filtered = filterRecipes(recipes, currentFilter);
const sorted = sortRecipes(filtered, currentSort);
renderRecipes(sorted);
};

// ------------------ Event Listeners ------------------

// Filter buttons
filterButtons.forEach(button =&gt; {
button.addEventListener(&quot;click&quot;, () =&gt; {

filterButtons.forEach(b =&gt; b.classList.remove(&quot;active&quot;));
button.classList.add(&quot;active&quot;);

currentFilter = button.dataset.filter;
updateDisplay();
});
});

// Sort buttons
sortButtons.forEach(button =&gt; {
button.addEventListener(&quot;click&quot;, () =&gt; {
sortButtons.forEach(b =&gt; b.classList.remove(&quot;active&quot;));
button.classList.add(&quot;active&quot;);

currentSort = button.dataset.sort;
updateDisplay();
});
});

// ------------------ Initial Render ------------------
updateDisplay();