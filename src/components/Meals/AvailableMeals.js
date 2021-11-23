import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-8fdd2-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      console.log(response.ok)
      if (!response.ok) {
        //console.log('reached here after throwing error')
        throw new Error('Something went wrong!');
      }
      
      const responseData = await response.json();
      const DUMMY_MEALS_ = [];
      for (const key in responseData) {
        DUMMY_MEALS_.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setMeals(DUMMY_MEALS_);
      setIsLoading(false);
      //console.log('came here in f')
    };
    fetchMeals().catch((error) => {
      //console.log('came here ')
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
   // console.log('reached here 1')
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  
  if (httpError) {
    // console.log('reached here 2')
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
