import { useState, useEffect } from 'react';
import { RecipeForm } from './components/RecipeForm';
import { RecipeList } from './components/RecipeList';
import "./index.css";


// localStorageから初期値を読み込む関数
const getInitialRecipes = () => {
  const savedRecipes = localStorage.getItem('recipes');
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

function App() {
  const [recipes, setRecipes] = useState(getInitialRecipes);
  const [isInitialized, setIsInitialized] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const editingRecipe = recipes.find(recipe => recipe.id === editingId);

  const updateRecipe = (id, updatedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === id ? updatedRecipe : recipe));
    setEditingId(null);
  }
  const startEditing = (id) => {
    setEditingId(id);
  }
  const cancelEditing = () => {
    setEditingId(null);
  }

  // 初回マウント時に初期化フラグを立てる
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // recipesが変更されるたびにlocalStorageに保存する（初回読み込み後のみ）
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes, isInitialized]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  }

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <>
      <h1 className="text-2xl my-4 py-4 font-bold text-center">レシピ管理アプリ</h1>
      <RecipeForm
        onAddRecipe={addRecipe}
        onUpdateRecipe={updateRecipe}
        editingRecipe={editingRecipe}
        onCancelEditing={cancelEditing}
      />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} startEditing={startEditing} />
    </>
  )
}

export default App
