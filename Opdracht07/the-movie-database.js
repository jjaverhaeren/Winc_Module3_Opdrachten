const myFavoriteMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"],
};

// const movieInformation = function(movie) {

//     const movieTitle = movie.title;
//     const movieDuration = movie.duration;

//     let Stars = 'Stars: ';
//     for ( let i = 0; i < movie.stars.length; i++) {
//         Stars = Stars + movie.stars[i];
//         if (i != movie.stars.length -1) {
//             Stars = Stars + ', ';
//         }
//     }
//     console.log(`${movieTitle} lasts for ${movieDuration} minutes. ${Stars}.`);
// };

const movieInformation = function(movie) {
  const movieTitle = movie.title;
  const movieDuration = movie.duration;

  console.log(`${movieTitle} lasts for ${movieDuration} minutes. Stars: ${movie.stars.join(", ")}.`);
};

console.log(movieInformation(myFavoriteMovie));
