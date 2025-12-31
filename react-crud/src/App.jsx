import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const addName = (e) => {
    setName(() => e.target.value);
  }

  const addIngredients = (e) => {
    setIngredients(() => e.target.value);
  }

  const addRecipe = () => {
    setRecipes([...recipes, { id: Date.now(), value: name, ingredients: ingredients }]);
    setName('');
    setIngredients('');
  }

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <>
      <h1>レシピ管理アプリ</h1>
      <input type="text" value={name} onChange={addName} placeholder="レシピ名" />
      <textarea value={ingredients} onChange={addIngredients} placeholder="材料" rows="3" />
      <button onClick={addRecipe}>レシピを登録</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div>{recipe.value}</div>
            <div>{recipe.ingredients}</div>
            <button onClick={() => deleteRecipe(recipe.id)}>レシピを削除</button>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
