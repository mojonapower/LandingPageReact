import React from "react";
import Card from "./card.jsx";
//create your first component
//Pieza de lego llamada padre (COMPONENTE) -> funcion
const Padre = () => {
	let mascotas = [
		{ Nombre: "Carolina", Mascota: "Umai" },
		{ Nombre: "Fernando", Mascota: "Guatón" },
		{ Nombre: "Freddy", Mascota: "Cloey" },
		{ Nombre: "Germánn", Mascota: "Mancha" },
		{ Nombre: "Jhonny", Mascota: "Ginebra" },
		{ Nombre: "Juan", Mascota: "Melkor" },
		{ Nombre: "Karen", Mascota: "cuiskilospi" },
		{ Nombre: "Saray", Mascota: "Completito" },
		{ Nombre: "Freddy Lobo", Mascota: "Alma" },
		{ Nombre: "Macarena", Mascota: "Linux" }
	];
	return (
		<>
			<div className="text-center mt-5">
				<h1>Hello Geeks! :D !</h1>
				{//MAP es una función que me ayuda a ejecutar una instrucción por cada elemento de un arreglo
				mascotas.map((valor, posicion) => {
					console.log(valor, posicion);
					return (
						<div key={posicion}>
							<Card
								duenio={valor.Nombre}
								mascota={valor.Mascota}
							/>
						</div>
					);
				})}
				<div className="row"></div>
			</div>
		</>
	);
};

export default Padre;
