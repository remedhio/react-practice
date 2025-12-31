export const RecipeList = ({ recipes, deleteRecipe }) => {
  console.log(recipes);
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <div>{recipe.value}</div>
          <div>{recipe.ingredients}</div>
          <button onClick={() => deleteRecipe(recipe.id)}>レシピを削除</button>
        </li>
      ))}
    </ul>
  )
}
