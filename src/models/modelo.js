export class Habitacion {

	constructor(id, nombre, plazasDisponibles, fechaAlta) {
		
		this.id = id;
		this.nombre = nombre;
		this.plazasDisponibles = plazasDisponibles;
		this.fechaAlta = fechaAlta ?? new Date().toISOString().split("T")[0];
	}
}
