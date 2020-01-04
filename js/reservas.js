var Reserva = function (horario, cantPersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario,
    this.cantPersonas = cantPersonas,
    this.precioPorPersona = precioPorPersona,
    this.codigoDeDescuento = codigoDeDescuento

}

Reserva.prototype.precioBase = function (cantPersonas, precioPorPersona) {
    return this.cantPersonas * this.precioPorPersona;

} 

Reserva.prototype.precioFinal = function () {
    var precioBase = this.precioBase();
    var adicionales = this.calcularAdicionalFinde(precioBase);
    var descuentos = this.calcularDescuentosPorGrupo(precioBase) + this.calcularDescuentosPorCodigo(precioBase);
    return precioBase  - descuentos + adicionales;
    
}


Reserva.prototype.calcularDescuentosPorGrupo = function (base) {
    var descuento = 0;

    if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
        descuento = 5;
    } else if (this.cantPersonas == 7 || this.cantPersonas == 8) {
        descuento = 10;
    } else if (this.cantPersonas > 8) {
        descuento = 15;
    }
    return base * descuento / 100;
}


Reserva.prototype.calcularDescuentosPorCodigo = function (base) {
    var descuento = 0;
    if (this.codigoDeDescuento == "DES15") {
        descuento = base * 15 / 100;
    } else if (this.codigoDeDescuento == "DES200") {
        descuento = 200;
    } else if (this.codigoDeDescuento == "DES1") {
        descuento = this.precioPorPersona;
    }
    return descuento;
}

Reserva.prototype.calcularAdicionalFinde = function (base) {
    var dia = this.horario.getDay();
    
    var adicionalFinde = 0;
   if (dia == 5 || dia == 6 || dia == 0) {
       adicionalFinde = base * 10 /100;
   } else{
       adicionalFinde = 0;
   }
   return adicionalFinde;
}




var listadoDeReservas = [
new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200"),
new Reserva(new Date(2018, 7, 24, 11, 00), 2, 250),
new Reserva(new Date(2018, 7, 30, 11, 00), 7, 150),

];

