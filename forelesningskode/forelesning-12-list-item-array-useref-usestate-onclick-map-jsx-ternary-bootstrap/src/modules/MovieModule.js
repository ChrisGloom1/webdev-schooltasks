const MovieModule = (
    
    () => {

        const movieArray = [ 
            "Avatar 2",
            "Albert Åberg", 
            "Spiderman - Many ways Home", 
            "Nope", 
            "Smile", 
            "Olsenbanden" 
        ];

        const getAll = () => [ ...movieArray ];

        return {
            getAll
        }

    }

)();

export default MovieModule;