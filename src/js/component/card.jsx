import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://lh3.googleusercontent.com/proxy/o2bac9xdG5u2qSmuyHVTOk9BJC4Fzi_fWBuImWLC0jb829a7GCwZohS7S0GwutpV8iM5NcsGCp062U_9WstvY7s64R-LJRTSS-8LBYLLmPbjIjIK5Zz4458SmZthNEbucpjO9dcY"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Les presento a {props.mascota}</h5>
				<p className="card-text">
					Mi nombre es {props.duenio}, esta es mi mascota y me hace
					muy feliz :)
				</p>
				<a href="#" className="btn btn-primary">
					Ver más información
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	duenio: PropTypes.string,
	mascota: PropTypes.string
};
export default Card;
