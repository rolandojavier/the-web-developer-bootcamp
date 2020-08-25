const movies = [
    {
        title: 'Top Gun',
        rating: 3.5,
        hasWatched: true
    },
    {
        title: 'Moana',
        rating: 4,
        hasWatched: false
    },
    {
        title: 'Interstellar',
        rating: 4.5,
        hasWatched: true
    },
    {
        title: 'Titanic',
        rating: 5,
        hasWatched: true
    }
];

movies.forEach(function(movie){
    if(movie.hasWatched){
        console.log('You have seen "' + movie.title + '" - ' + movie.rating + ' stars');
    } else {
        console.log('You have not seen "' + movie.title + '" - ' + movie.rating + ' stars');
    }
});