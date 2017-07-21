// You've built an inflight entertainment system with on-demand movie streaming.
// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.
//
// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

//O(n) Time and O(n) space
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  //make a new set for movie lengths we have seen
  var seenMovies = new Set();

  for (var i = 0; i < movieLengths.length; i++) {
    var firstMovieLength = movieLengths[i];
    var matchingSecondMovie = flightLength - firstMovieLength;

    if (seenMovies.has(matchingSecondMovie)) {
      return true;
    }

    seenMovies.add(firstMovieLength);
  }
  //we never found a match so return false
  return false;
}
