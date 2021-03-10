let movies = [{
        id: 1,
        name: "머신건의 반격",
        score: 1
    },
    {
        id: 2,
        name: "윾쾌한 던짐",
        score: 2
    },
    {
        id: 3,
        name: "코롤로나",
        score: 99
    },
    {
        id: 4,
        name: "킬링키",
        score: 15
    },
];

export const getMovies = () => movies;

export const getByID = id => {
    const filteredMovies = movies.filter(movie => id === movie.id)
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => id !== movie.id)
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}