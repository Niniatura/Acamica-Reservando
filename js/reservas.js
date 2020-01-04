//Modelado del objeto reserva
var Reserva = function (horario, cantPersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario,
    this.cantPersonas = cantPersonas,
    this.precioPorPersona = precioPorPersona,
    this.codigoDeDescuento = codigoDeDescuento
    
}

//Calculo del precio base de una reserva
Reserva.prototype.precioBase = function (cantPersonas, precioPorPersona) {
    
    return this.cantPersonas * this.precioPorPersona;

} 

//Calcula el precio final de una reserva
Reserva.prototype.precioFinal = function () {
    var precioBase = this.precioBase();
    var adicionales = this.calcularAdicionalFinde(precioBase) + this.calcularAdicionalHorario(precioBase);
    var descuentos = this.calcularDescuentosPorGrupo(precioBase) + this.calcularDescuentosPorCodigo(precioBase);
    return precioBase  - descuentos + adicionales;
    
}

//Calcula el descuento por cantidad de personas o grupos grandes
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

//Calcula el descuento por codigo de descuento asociado
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

//Adicional por franjas horarias
Reserva.prototype.calcularAdicionalHorario = function (base) {
    var horas = this.horario.getHours();
    var adicionalHorario = 0;
    if (horas >= 13 && horas <= 14 || horas >= 20 && horas <= 21) {
        adicionalHorario = base * 5 / 100;
    } else {
        adicionalHorario = 0;
    }
    return adicionalHorario;
}

//Adicional por dias de fin de semana
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
new Reserva(new Date(2018, 7, 2, 13, 00), 2, 300),

];

