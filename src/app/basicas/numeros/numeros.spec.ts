import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {

  it( 'Debe retornar 100 si el numero ingresado es 100 o +', () => {

    const res = incrementar(300);
    expect( res ).toBe(100);

  });

  it( 'Debe retornar el nro ingresado + 1 si el numero es menor a 100', () => {

    const res = incrementar(50);
    expect( res ).toBe(51);

  });

});
