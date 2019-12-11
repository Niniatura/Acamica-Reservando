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

    describe('Test de puntuacion', () => {
        it('Promedio calificaciones correcto', () => {
            expect(listado.restaurantes[0].obtenerPuntuacion()).to.equal(7.4);
        });
        it('Sin calificaciones', () => {
            expect(listado.restaurantes[24].obtenerPuntuacion()).to.equal(0);
        });
});
});