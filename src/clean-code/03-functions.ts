(() => {

    // función para obtener información de una película por Id
    function getOneMovie ( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCast ( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActor ( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    interface MovieDetail {
        title:         string;
        description:   string;
        rating:        number;
        cast:          string[];
    }

    function createMovie({title, description, rating, cast} : MovieDetail  ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }
    
    //Continuar

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        if ( isRetired ) return 3000;
        
        return 4000; 

    }


})();
