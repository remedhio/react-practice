import { useState } from 'react';

export const RecipeForm = ({ onAddRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const addName = (e) => {
    setName(() => e.target.value);
  }

  const addIngredients = (e) => {
    setIngredients(() => e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && ingredients.trim()) {
      onAddRecipe({ id: Date.now(), value: name, ingredients: ingredients });
      setName('');
      setIngredients('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={addName}
        placeholder="レシピ名"
      />
      <textarea
        value={ingredients}
        onChange={addIngredients}
        placeholder="材料"
        rows="3"
      />
      <button type="submit">レシピを登録</button>
    </form>
  )
}
