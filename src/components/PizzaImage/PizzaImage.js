import Reacat from 'react';

import classes from './pizzaImage.css';
import pizzaImage from '../../assets/pizza.jpg';


const pizzaImage = (props) => {

    return (
        <div className={classes.PizzaImage}>
            <img src={pizzaImage} className={classes.pizzaImg}/>

        </div>
    )
}


export default pizzaImage;