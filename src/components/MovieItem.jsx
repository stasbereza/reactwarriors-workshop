import React from "react";

export default class MovieItem extends React.Component {
constructor(props) {
super(props);

this.state = {
isShowOverview: false
};
}

render() {
const { movie } = this.props;
console.log(this.props);
return (
<div className="card" style={{ width: "100%" }}>
<img
className="card-img-top"
src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
alt=""
/>
<div className="card-body">
<h6 className="card-title">{movie.title}</h6>
<p className="mb-0">Rating: {movie.vote_average}</p>
<button
onClick={() => {
this.setState({
isShowOverview: true
});
}}
>
Show overview
</button>
<button
onClick={() => {
this.setState({
isShowOverview: false
});
}}
>
Hide overview
</button>
{this.state.isShowOverview ? <p>{movie.overview}</p> : null}
</div>
</div>
);
}
}