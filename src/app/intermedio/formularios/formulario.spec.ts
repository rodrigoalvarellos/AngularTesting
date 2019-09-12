import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';



describe('Prueba de Formularios', () => {

  let componente: FormularioRegister;

  beforeEach(() => {

    componente = new FormularioRegister( new FormBuilder() );

  });

  it('Debe de crear un formulario con 2 campos, email y password', () => {
    expect( componente.form.contains('email')).toBeTruthy();
    expect( componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio',() => {
    const control = componente.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('El email debe ser válido', () => {
    const control = componente.form.get('email');
    control.setValue('rodri.alvarellos@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
