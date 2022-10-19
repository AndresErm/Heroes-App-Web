import React from "react";
import {getHeroesByPublisher} from '../helpers/getHeroesByPublisher';


const HeroeList = ( { publisher } ) => {

    const heroes = getHeroesByPublisher( publisher );

    return(

            <div className="row rows-cols-1 row-cols-sm-3 g-3 ">
               {
                heroes.map( hero => ( 
                    <li key={ hero.id }>
                        { hero.superhero }
                    </li>
                ))
               }

            </div>

    )

}

export { HeroeList };