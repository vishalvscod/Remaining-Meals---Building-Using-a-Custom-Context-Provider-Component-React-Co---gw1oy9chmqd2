import { MealContext } from "./MealsProvider";
import { useContext } from "react";
const MealsList = () => {
  const mealsContextData = useContext(MealContext);
  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {mealsContextData.meals.map((meal)=>{
          return (
            <li key={meal.id}>
              <input 
                type="checkbox" 
                checked={meal.isChecked || false}
                onChange={()=>mealsContextData.tickMeal(meal.id)}
              />
              {meal.name}
            </li>
          )
        })}
        
      </ul>
    </div>
  );
};

export default MealsList;