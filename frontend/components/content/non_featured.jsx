import React from 'react';
import Link from 'react-router-dom';

class NonFeatured extends React.Component {
    constructor (props) {
        super(props);
    }
    path(movieId) {
        let hasClass = document.getElementsByClassName("vid-link-a");

        if (hasClass.length) {
            return `/movies/${movieId}`;
        } else {
            return `/content`;
        }

    }
    render() {

        let rows = [];
        let gridTitle = "movies";
        let mov = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/pulp_fiction_16_9.jpg";

        if (this.props.currentUser.minus_check !== null) {
            // let selectedMovies = this.props.movies.filter(movie =>
            //     Object.keys(this.props.currentUser.minus_check).includes(`${movie.id}`)
            // )
        let selectedMovies = [mov, mov, mov, mov]


            // selectedMovies.forEach((movie, i) => {
            //     selectedMovies[i].plus_minus = this.props.currentUser.minus_check[movie.id];
            // })
            let numRows = Math.ceil(selectedMovies.length / 4);
            let rowStart = 0;

            for (let i = 0; i < numRows; i++) {
                rows[i] = selectedMovies.slice(rowStart, rowStart + 4);
                rowStart += 4;
            }

            if (!rows.length) gridTitle = "";

            return (
                <div >
                    <h3 id="movies-top">{gridTitle}</h3>
                    {rows.map(row =>
                        <ul className="content-row">
                            {row.map(movie =>
                                <li>
                                    <div className="thumb-size">
                                            <img className="sel-thumb"
                                                src={movie} />
                                        </div>
                                    <p id="w-m">movie title</p>
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default NonFeatured;