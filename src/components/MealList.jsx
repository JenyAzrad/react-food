import { Meal } from './Meal';

function MealList({ meals }) {
    return (
        <div className='list'>
            {meals && meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}
export { MealList };
