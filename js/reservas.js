var Reserva = function (horario, cantPersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario,
    this.cantPersonas = cantPersonas,
    this.precioPorPersona = precioPorPersona,
    this.codigoDeDescuento = codigoDeDescuento

}

Reserva.prototype.precioBaseReserva = function (cantPersonas, precioPorPersona) {
    return this.precioBase = this.cantPersonas * this.precioPorPersona;

} 

var listadoDeReservas = [
new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200"),
];

