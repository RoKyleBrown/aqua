

export const fetchMovies = () => {
    return $.ajax({
            url: `/api/movies`,
        error: (err) => console.log(err)
    })
}