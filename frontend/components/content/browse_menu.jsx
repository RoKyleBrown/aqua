import React from 'react';


class BrowseMenu extends React.Component {
    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);
    }

    itemSelected(e) {
        e.preventDefault();
        let item = e.currentTarget.textContent;

        if (item === 'genre') {
            $(".genre").addClass("br-lt-li-b");
            $(".year").removeClass("br-lt-li-b");
            $(".genre-list").removeClass("genre-list-b")
            $(".year-list").addClass("year-list-b")
        } else {
            $(".year").addClass("br-lt-li-b");
            $(".genre").removeClass("br-lt-li-b");
            $(".genre-list").addClass("genre-list-b")
            $(".year-list").removeClass("year-list-b")
        }

    }

    noStinkinHyphens(item) {
        let newStr = ""

        if ( item !== "sci-fi") {
            newStr = item.replace(/-/g, " ");
        } else {
            newStr = item;
        }

        return newStr;
    }

    subItemSelected(e) {
        e.preventDefault();
        $(".browse-sub-item-b").removeClass("browse-sub-item-b")
        let item = e.currentTarget.classList[1];
        $(`.${item}`).addClass("browse-sub-item-b")

    }

    genres() {
        let genres = this.props.movies.map ( movie => movie.genre);
        let list = [...new Set(genres)].sort();
        let colNum = Math.ceil(list.length/ 5);
        let columns = [];
        let colStart = 0;

        for (let i = 0; i < colNum; i++){
            columns[i] = list.slice(colStart, colStart + 5)
            colStart += 5;
        }
        return (
            <div className="genre-list">
                {columns.map ( column => 
                    <div id="genre-col">
                        {column.map(item =>
                            <div id="browse-col-div">
                                <p 
                                    className={`browse-sub-item ${item}`}
                                    onClick={this.subItemSelected}
                                >
                                  {this.noStinkinHyphens(item)}
                                </p>
                            </div>
                        )}
                    </div>
                    
                    )}
            </div>
            )
    }
    decades() {
        let years = this.props.movies.map(movie => 
                movie.year.slice(0,3)
            );
        let list = [...new Set(years)].sort();
        list = list.map( item => `${item}0s`);
        let colNum = Math.ceil(list.length / 5);
        let columns = [];
        let colStart = 0;

        for (let i = 0; i < colNum; i++) {
            columns[i] = list.slice(colStart, colStart + 5)
            colStart += 5;
        }
        return (
            <div className="year-list year-list-b">
                {columns.map(column =>
                    <div id="year-col">
                        {column.map(item =>
                            <div id="browse-col-div">
                                <p 
                                    className={`browse-sub-item ${item}`}
                                    onClick={this.subItemSelected}
                                >
                                    {item}
                                </p>
                            </div>
                        )}
                    </div>

                )}
            </div>
        )
    }

    render() {

        return (
            <div className="browse-menu-contain">
                <div id="browse-ln"></div>
                <div id="browse-menu-content">
                    <div id="browse-left">
                        <div>
                            <h3 className="br-lt-li genre br-lt-li-b"
                            onClick={this.itemSelected}
                            >genre</h3>
                        </div>
                        <div>
                            <h3 className="br-lt-li year"
                            onClick={this.itemSelected}
                            >year</h3>
                        </div>
                    </div>
                    <div id="browse-right">
                        {this.genres()}
                        {this.decades()}
                    </div>
                </div>
            </div>
        )
    }
}


export default BrowseMenu