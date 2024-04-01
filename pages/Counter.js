import { MealContext } from "./MealsProvider";
import { useContext } from "react";

const Counter = () => {
  const mealsContextData = useContext(MealContext);
  const mealsWithChecked = mealsContextData.meals.filter((meal)=>{
    return meal.isChecked !== true
  })

  return (
    <div>
      <h3>Meals Remaining: {mealsWithChecked.length}</h3>
    </div>
  );
};

export default Counter;
