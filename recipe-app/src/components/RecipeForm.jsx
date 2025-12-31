import { useState, useEffect } from 'react';

export const RecipeForm = ({ onAddRecipe, onUpdateRecipe, editingRecipe, onCancelEditing }) => {
  const [name, setName] = useState(editingRecipe ? editingRecipe.value : '');
  const [ingredients, setIngredients] = useState(editingRecipe ? editingRecipe.ingredients : '');

  useEffect(() => {
    if (editingRecipe) {
      setName(editingRecipe.value);
      setIngredients(editingRecipe.ingredients);
    } else {
      setName('');
      setIngredients('');
    }
  }, [editingRecipe]);

  const addName = (e) => {
    setName(() => e.target.value);
  }

  const addIngredients = (e) => {
    setIngredients(() => e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && ingredients.trim()) {
      if (editingRecipe) {
        onUpdateRecipe(editingRecipe.id, { id: editingRecipe.id, value: name, ingredients: ingredients });
      } else {
        onAddRecipe({ id: Date.now(), value: name, ingredients: ingredients });
      }
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
      <button type="submit">{editingRecipe ? 'レシピを更新' : 'レシピを登録'}</button>
      {editingRecipe && (
        <button type="button" onClick={onCancelEditing}>キャンセル</button>
      )}
    </form>
  )
}
