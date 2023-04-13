class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=62153455c410208d2409c32a7683c04d&query=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
