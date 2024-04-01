import { useState } from "react";

const todaysMeals = [
  { id: 1, name: "Baked Beans" },
  { id: 2, name: "Baked Sweet Potatoes" },
  { id: 3, name: "Baked Potatoes" },
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (id) => {
    const updateMeals = meals.map((meal)=>{
      if(meal.id ===id){
        return {...meal, isChecked : !meal.isChecked}
      }
      return meal;
    })
    setMeals(updateMeals);
  };

  return 
  <MealContext.Provider value={{meals, tickMeal}}>
        {children}
  </MealContext.Provider>
};

export default MealsProvider;
