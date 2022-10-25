import { heroes } from "../data/heroes";

const getHeroById = ( id ) => {

    //console.log( id );

    const heroe =  heroes.find( (hero, i) => {
                                //console.log( `This is ${ JSON.stringify( hero, null, 3 ) } ` );
                                // console.log( ` id De HEROE: ${ hero.id }, id NORMAL: ${ id }, tipo heroe: ${typeof hero.id}, normal: ${typeof id}
                                // validacion: ${hero.id === id}: index: ${i}` );
                                return hero.id === id;
                            }
    ); 

    console.log(  `I'm Here  ${ JSON.stringify(heroe, null, 3)}` );

    return  heroe  ;



}


export { getHeroById }