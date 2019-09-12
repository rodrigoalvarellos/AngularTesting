import { usuarioIngresdo } from './booleanos';

describe('Pruebas de Booleanos', () => {

  it('Debe retornar TRUE', () => {

    const resp = usuarioIngresdo();

    expect(resp).toBeTruthy();

  });

});
