import { Jugador } from './clases';

describe('Pruebas de clases', () => {

  let jugador = new Jugador();

  beforeAll(() => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    // console.log('beforeEach');
    jugador = new Jugador();
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    // console.log('afterEach');
    jugador.hp = 100;
  });

  it('Debe de retornar 80 de hp si recibe 20 d danio', () => {

    const resp = jugador.recibeDanio(20);
    expect( resp ).toBe(80);
  });

  it('Debe de retornar 50 de hp si recibe 50 d danio', () => {

    const resp = jugador.recibeDanio(50);
    expect( resp ).toBe(50);
  });

  it('Debe de retornar 0 de hp si recibe 101 d danio', () => {

    const resp = jugador.recibeDanio(101);
    expect( resp ).toBe(0);
  });

});
