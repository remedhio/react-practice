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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto p-4 rounded-md">
      <input
        type="text"
        value={name}
        onChange={addName}
        placeholder="レシピ名"
        className="border-2 border-gray-300 p-2 rounded-md"
      />
      <textarea
        value={ingredients}
        onChange={addIngredients}
        placeholder="材料"
        rows="3"
        className="border-2 border-gray-300 p-2 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">{editingRecipe ? 'レシピを更新' : 'レシピを登録'}</button>
      {editingRecipe && (
        <button type="button" onClick={onCancelEditing} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">キャンセル</button>
      )}
    </form>
  )
}
