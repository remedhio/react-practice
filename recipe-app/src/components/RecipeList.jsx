export const RecipeList = ({ recipes, deleteRecipe, startEditing }) => {
  console.log(recipes);
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id} className="border-2 border-gray-300 m-10 p-4 rounded-md">
          <div className="text-lg font-bold mb-2">料理名：{recipe.value}</div>
          <div className="text-sm mb-4">材料：{recipe.ingredients}</div>
          <div className="flex gap-4">
            <button onClick={() => startEditing(recipe.id)} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">レシピを編集</button>
            <button onClick={() => deleteRecipe(recipe.id)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">レシピを削除</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
