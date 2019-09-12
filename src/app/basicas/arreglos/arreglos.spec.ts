import { obtenerRobots } from './arreglos';

// La  X es para saltar la prueba, puede ir en el describe o en el it
xdescribe('Prueba de arreglos', () => {

  it('Debe retornar almenos 3 robots', () => {
    const res = obtenerRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3);
  });

  it('Debe contener a Megaman y Ultron', () => {
    const res = obtenerRobots();
    expect( res ).toContain('Megaman');
    expect( res ).toContain('Ultron');
  });

});
