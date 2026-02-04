// ------------------ RecipeJS App (IIFE) ------------------
const RecipeApp = (() =&gt; {
    console.log(&quot;RecipeApp initializing...&quot;);
    // ------------------ Recipe Data ------------------
    const recipes = [
        {
            id: 1,
            title: &quot;Classic Spaghetti Carbonara&quot;,
            time: 25,
            difficulty: &quot;easy&quot;,
            description: &quot;A creamy Italian pasta dish.&quot;,
            category: &quot;pasta&quot;,
            ingredients: [&quot;Spaghetti&quot;, &quot;Eggs&quot;, &quot;Parmesan&quot;, &quot;Pancetta&quot;, &quot;Black
pepper&quot;],
            steps: [
                &quot;Boil pasta&quot;,
                &quot;Cook pancetta&quot;,
                {
                    text: &quot;Prepare sauce&quot;,
                    substeps: [&quot;Beat eggs with parmesan&quot;, &quot;Mix with pancetta&quot;]
                },
                &quot;Combine pasta with sauce&quot;,
                &quot;Serve hot&quot;
            ]
        },
        {
            id: 2,
            title: &quot;Chicken Tikka Masala&quot;,
            time: 45,
            difficulty: &quot;medium&quot;,
            description: &quot;Tender chicken in spiced sauce.&quot;,
            category: &quot;curry&quot;,

            ingredients: [&quot;Chicken&quot;, &quot;Yogurt&quot;, &quot;Garam masala&quot;, &quot;Tomato puree&quot;,
&quot;Cream&quot;],
            steps: [
                &quot;Marinate chicken&quot;,
                &quot;Cook chicken in oven&quot;,
                {
                    text: &quot;Prepare sauce&quot;,
                    substeps: [&quot;Sauté onions and garlic&quot;, &quot;Add tomato puree&quot;,
&quot;Add cream and spices&quot;]
                },
                &quot;Combine chicken with sauce&quot;,
                &quot;Garnish and serve&quot;
            ]
        },
        {
            id: 3,
            title: &quot;Homemade Croissants&quot;,
            time: 180,
            difficulty: &quot;hard&quot;,
            description: &quot;Buttery French pastries.&quot;,
            category: &quot;baking&quot;,
            ingredients: [&quot;Flour&quot;, &quot;Butter&quot;, &quot;Yeast&quot;, &quot;Milk&quot;, &quot;Sugar&quot;, &quot;Salt&quot;],
            steps: [
                &quot;Prepare dough&quot;,
                &quot;Layer with butter&quot;,
                {
                    text: &quot;Fold dough multiple times&quot;,
                    substeps: [&quot;First fold&quot;, &quot;Second fold&quot;, &quot;Third fold&quot;]
                },
                &quot;Shape croissants&quot;,
                &quot;Bake until golden&quot;
            ]
        },
        {
            id: 4,
            title: &quot;Greek Salad&quot;,
            time: 15,
            difficulty: &quot;easy&quot;,
            description: &quot;Fresh vegetables and feta.&quot;,
            category: &quot;salad&quot;,
            ingredients: [&quot;Tomatoes&quot;, &quot;Cucumber&quot;, &quot;Feta cheese&quot;, &quot;Olives&quot;, &quot;Olive
oil&quot;],
            steps: [
                &quot;Chop vegetables&quot;,
                &quot;Mix vegetables in a bowl&quot;,

                &quot;Add feta and olives&quot;,
                &quot;Drizzle olive oil&quot;,
                &quot;Serve fresh&quot;
            ]
        },
        {
            id: 5,
            title: &quot;Beef Wellington&quot;,
            time: 120,
            difficulty: &quot;hard&quot;,
            description: &quot;Beef wrapped in pastry.&quot;,
            category: &quot;meat&quot;,
            ingredients: [&quot;Beef fillet&quot;, &quot;Mushrooms&quot;, &quot;Puff pastry&quot;, &quot;Eggs&quot;,
&quot;Mustard&quot;],
            steps: [
                &quot;Sear beef fillet&quot;,
                &quot;Prepare mushroom duxelles&quot;,
                &quot;Wrap beef with pastry&quot;,
                &quot;Bake in oven&quot;,
                &quot;Rest and serve&quot;
            ]
        },
        {
            id: 6,
            title: &quot;Vegetable Stir Fry&quot;,
            time: 20,
            difficulty: &quot;easy&quot;,
            description: &quot;Quick mixed vegetables.&quot;,
            category: &quot;vegetarian&quot;,
            ingredients: [&quot;Broccoli&quot;, &quot;Carrots&quot;, &quot;Bell peppers&quot;, &quot;Soy sauce&quot;,
&quot;Garlic&quot;],
            steps: [
                &quot;Chop vegetables&quot;,
                &quot;Heat pan with oil&quot;,
                &quot;Stir fry vegetables&quot;,
                &quot;Add soy sauce and seasoning&quot;,
                &quot;Serve hot&quot;
            ]
        },
        {
            id: 7,
            title: &quot;Pad Thai&quot;,
            time: 30,
            difficulty: &quot;medium&quot;,
            description: &quot;Thai noodles with sauce.&quot;,

            category: &quot;noodles&quot;,
            ingredients: [&quot;Rice noodles&quot;, &quot;Tofu&quot;, &quot;Eggs&quot;, &quot;Tamarind paste&quot;,
&quot;Peanuts&quot;],
            steps: [
                &quot;Soak noodles&quot;,
                &quot;Cook tofu and eggs&quot;,
                {
                    text: &quot;Prepare sauce&quot;,
                    substeps: [&quot;Mix tamarind paste&quot;, &quot;Add fish sauce&quot;, &quot;Add
sugar&quot;]
                },
                &quot;Combine noodles with sauce&quot;,
                &quot;Garnish with peanuts and lime&quot;
            ]
        },
        {
            id: 8,
            title: &quot;Margherita Pizza&quot;,
            time: 60,
            difficulty: &quot;medium&quot;,
            description: &quot;Classic pizza.&quot;,
            category: &quot;pizza&quot;,
            ingredients: [&quot;Pizza dough&quot;, &quot;Tomato sauce&quot;, &quot;Mozzarella&quot;, &quot;Basil&quot;,
&quot;Olive oil&quot;],
            steps: [
                &quot;Prepare dough&quot;,
                &quot;Spread tomato sauce&quot;,
                &quot;Add mozzarella and basil&quot;,
                &quot;Bake in oven&quot;,
                &quot;Drizzle olive oil and serve&quot;
            ]
        }
    ];
    // ------------------ DOM Elements ------------------
    const recipeContainer = document.querySelector(&quot;#recipe-container&quot;);
    const filterButtons = document.querySelectorAll(&quot;.filters button&quot;);
    const sortButtons = document.querySelectorAll(&quot;.sorts button&quot;);
    // ------------------ App State ------------------
    let currentFilter = &quot;all&quot;;
    let currentSort = &quot;none&quot;;
    // ------------------ Pure Functions ------------------

    // Recursive function to render steps with nested substeps
    const renderSteps = (steps, level = 0) =&gt; {
        let html = &quot;&lt;ol&gt;&quot;;
        steps.forEach(step =&gt; {
            if (typeof step === &quot;string&quot;) {
                html += `&lt;li style=&quot;margin-left:${level * 20}px&quot;&gt;${step}&lt;/li&gt;`;
            } else if (step.text &amp;&amp; step.substeps) {
                html += `&lt;li style=&quot;margin-left:${level * 20}px&quot;&gt;${step.text}`;
                html += renderSteps(step.substeps, level + 1);
                html += &quot;&lt;/li&gt;&quot;;
            }
        });
        html += &quot;&lt;/ol&gt;&quot;;
        return html;
    };
    // Create the HTML for one recipe card including toggle buttons
    const createRecipeCard = (recipe) =&gt; `
        &lt;div class=&quot;recipe-card&quot;&gt;
            &lt;h3&gt;${recipe.title}&lt;/h3&gt;
            &lt;p&gt;${recipe.time} min | ${recipe.difficulty}&lt;/p&gt;
            &lt;p&gt;${recipe.description}&lt;/p&gt;
            &lt;!-- Toggle Buttons --&gt;
            &lt;button class=&quot;toggle-btn&quot; data-recipe-id=&quot;${recipe.id}&quot; data-
toggle=&quot;steps&quot;&gt;Show Steps&lt;/button&gt;
            &lt;button class=&quot;toggle-btn&quot; data-recipe-id=&quot;${recipe.id}&quot; data-
toggle=&quot;ingredients&quot;&gt;Show Ingredients&lt;/button&gt;
            &lt;!-- Hidden Containers --&gt;
            &lt;div class=&quot;steps-container&quot; data-recipe-id=&quot;${recipe.id}&quot;
style=&quot;display:none;&quot;&gt;
                ${renderSteps(recipe.steps)}
            &lt;/div&gt;
            &lt;div class=&quot;ingredients-container&quot; data-recipe-id=&quot;${recipe.id}&quot;
style=&quot;display:none;&quot;&gt;
                &lt;ul&gt;
                    ${recipe.ingredients.map(ing =&gt; `&lt;li&gt;${ing}&lt;/li&gt;`).join(&quot;&quot;)}
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    `;
    // Filters recipes based on current filter
    const filterRecipes = (recipes, filter) =&gt; {

        if (filter === &quot;all&quot;) return recipes;
        if (filter === &quot;quick&quot;) return recipes.filter(r =&gt; r.time &lt;= 30);
        return recipes.filter(r =&gt; r.difficulty === filter);
    };
    // Sorts recipes based on current sort
    const sortRecipes = (recipes, sortType) =&gt; {
        if (sortType === &quot;name&quot;) return [...recipes].sort((a, b) =&gt;
a.title.localeCompare(b.title));
        if (sortType === &quot;time&quot;) return [...recipes].sort((a, b) =&gt; a.time -
b.time);
        return recipes;
    };
    // ------------------ Render ------------------
    const renderRecipes = (recipesToRender) =&gt; {
        recipeContainer.innerHTML =
recipesToRender.map(createRecipeCard).join(&quot;&quot;);
    };
    // ------------------ Update Display ------------------
    const updateDisplay = () =&gt; {
        const filtered = filterRecipes(recipes, currentFilter);
        const sorted = sortRecipes(filtered, currentSort);
        renderRecipes(sorted);
    };
    // ------------------ Event Handling ------------------
    // Event delegation for toggle buttons
    recipeContainer.addEventListener(&quot;click&quot;, (e) =&gt; {
        if (!e.target.classList.contains(&quot;toggle-btn&quot;)) return;
        const button = e.target;
        const recipeId = button.dataset.recipeId;
        const toggleType = button.dataset.toggle;
        const container = document.querySelector(`.${toggleType}-container[data-
recipe-id=&#39;${recipeId}&#39;]`);
        if (!container) return;
        const isVisible = container.style.display === &quot;block&quot;;
        container.style.display = isVisible ? &quot;none&quot; : &quot;block&quot;;
        button.textContent = (isVisible ? &quot;Show &quot; : &quot;Hide &quot;) + (toggleType ===
&quot;steps&quot; ? &quot;Steps&quot; : &quot;Ingredients&quot;);

    });
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
    // ------------------ Initialize App ------------------
    const init = () =&gt; {
        console.log(&quot;RecipeApp ready!&quot;);
        updateDisplay();
    };
    return {
        init,
        updateDisplay
    };
})();
// Initialize the