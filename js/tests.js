var expect = chai.expect;

describe('Test de reserva de horarios', () => {
    it('Eliminar horario del arreglo', () => {
        var eliminarHorarios = listado.restaurantes[0];
        eliminarHorarios.reservarHorario('18:00');
        expect(eliminarHorarios.horarios[0]).to.equal('13:00');
        expect(eliminarHorarios.horarios[1]).to.equal('15:30');
        expect(eliminarHorarios.horarios.length).to.equal(2);
    });

    it('Mantener horarios del arreglo si el horario es incorrecto', () => {
        var mantenerHorarios = listado.restaurantes[1];
        mantenerHorarios.reservarHorario('17:00');
        expect(mantenerHorarios.horarios[0]).to.equal('12:30');
        expect(mantenerHorarios.horarios[1]).to.equal('14:30');
        expect(mantenerHorarios.horarios[2]).to.equal('15:00');
        expect(mantenerHorarios.horarios.length).to.equal(3);
    });

    it('Mantener mismos horarios si no hay parametro', () => {
        var mismosHorarios = listado.restaurantes[2];
        mismosHorarios.reservarHorario(' ');
        expect(mismosHorarios.horarios[0]).to.equal('11:30');
        expect(mismosHorarios.horarios[1]).to.equal('12:00');
        expect(mismosHorarios.horarios[2]).to.equal('22:30');
        expect(mismosHorarios.horarios.length).to.equal(3);

    });

});

describe('Test de puntuacion', () => {
    it('Promedio calificaciones correcto', () => {
        expect(listado.restaurantes[0].obtenerPuntuacion()).to.equal(7.4);
    });
    it('Sin calificaciones', () => {
        expect(listado.restaurantes[24].obtenerPuntuacion()).to.equal(0);
    });
});


describe('Funcion calificar', () => {
    it('Valor de calificacion negativo', () => {
        listado.restaurantes[24].calificar(-1);
        expect(listado.restaurantes[24].calificaciones.length).to.equal(0);
    });

    it('Valor de calificacion menor a 10', () => {
        listado.restaurantes[24].calificar(11);
        expect(listado.restaurantes[24].calificaciones.length).to.equal(0);
    });

    it('Valor de calificacion vacío', () => {
        listado.restaurantes[24].calificar();
        expect(listado.restaurantes[24].calificaciones.length).to.equal(0);
    });

    it('Valor de calificacion correcto', () => {
        listado.restaurantes[24].calificar(2);
        expect(listado.restaurantes[24].calificaciones.length).to.equal(1);
    });
    
});

    
    
describe('Funcion buscar restaurant', () => {
    it('Buscar restaurant por id', () => {
        expect(listado.buscarRestaurante(2).id).to.equal(2);
    });
    it('Id de restaurante inexistente', () => {
        expect(listado.buscarRestaurante(28).id).to.equal();
    });

});
describe('Funcion obtener restaurants', () => {
    it('Filtrar restaurantes por Rubro', () => {
        expect(listado.obtenerRestaurantes('Ensalada',null,null).length).to.equal(4);
    });
    it('Filtrar restaurantes por Ciudad', () => {
        expect(listado.obtenerRestaurantes(null,'París',null).length).to.equal(6);
    });
    it('Filtrar restaurantes por Horario', () => {
        expect(listado.obtenerRestaurantes(null, null, '13:00').length).to.equal(3);
    });
});
        
describe('Funciones TDD', () => {
    it('Funcion obtener el precio base de la reserva', () => {
        expect(listadoDeReservas[0].precioBase()).to.equal(2800);
    });

    it('Funcion obtener el precio final de la reserva con descuentos', () => {
        expect(listadoDeReservas[0].precioFinal()).to.equal(2170);
    });
    
});  

    


