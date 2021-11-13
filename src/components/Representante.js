import React, { Component, Fragment } from 'react';
import Util from '../Helpers/Util';
import { MsgValidate } from './Common';

export default class Representante extends Component {
  constructor(props) {
    super(props);
    this.formId = 'form-representante';
    this.form = null;
  }

  // #region ------------------------------------------------> "COMPONENT" //
  componentDidMount() {
    this.form = document.getElementById(this.formId);
    if (typeof this.props.onRef === 'function') this.buildRef();
  }

  /**
   * Función que asigna las funciones a las que tendra acceso la referencia del componente
   **/
  buildRef = () => {
    const { onRef } = this.props;
    onRef({
      getDataForm: this.getDataForm,
      resetForm: () => this.form && this.form.reset(),
    });
  };
  // #endregion --------------------------------------------------------> //

  /**
   * Función que recupera la información del formulario y la retorna
   */
  getDataForm = () => {
    // Si no se encuentra forumlario, se informa y se retorna error
    if (!this.form) {
      Util.getMsnDialog('warning', 'Form not found');
      return { data: {}, error: true };
    }
    return Util.getValidateDataForm(this.form, true);
  };
  render() {
    let { show } = this.props;
    return (
      <div className={`row ${show ? 'show' : 'hide'}`}>
        <span className="card-title">
          <h4>Representante Legal</h4>
        </span>
        <form id={this.formId} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for="nombre">Nombre</label>
              <MsgValidate />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="col s12">
                <label>Genero</label>
              </div>
              <div className="switch">
                <label>
                  F
                  <input id="genero" name="genero" type="checkbox" />
                  <span class="lever"></span>M
                </label>
              </div>
            </div>
            <div className="input-field col s6">
              <input
                id="fecha_nacimiento"
                name="fecha_nacimiento"
                type="date"
                className="validate"
                minLength={5}
                required
              />
              <label for="fecha_nacimiento">Fecha de nacimiento</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="entidad_federativa"
                name="entidad_federativa"
                type="text"
                className="validate"
                minLength={2}
                required
              />
              <label for="entidad_federativa">Entidad Federativa</label>
              <MsgValidate />
            </div>

            <div className="input-field col s6">
              <input
                id="pais_nacimiento"
                name="pais_nacimiento"
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for="rfc">País de nacimiento</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="nacionalidad"
                name="nacionalidad"
                type="text"
                className="validate"
                minLength={2}
                required
              />
              <label for="nacionalidad">Nacionalidad</label>
              <MsgValidate />
            </div>

            <div className="input-field col s6">
              <input
                id="curp"
                name="curp"
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for="rfc">CURP</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="rfc"
                name="rfc"
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for="regimen_fiscal ">RFC</label>
              <MsgValidate />
            </div>
            <div className="input-field col s6">
              <input
                id="estado_civil"
                name="estado_civil"
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for="estado_civil">Estado civil</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="telefono"
                name="telefono"
                type="number"
                min={1}
                className="validate"
                required
              />
              <label for="telefono">Telefóno</label>
              <MsgValidate />
            </div>
            <div className="input-field col s6">
              <input
                id="correo"
                name="correo"
                type="email"
                className="validate"
                minLength={5}
                required
              />
              <label for="correo">Correo</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="identificacion"
                name="identificacion"
                type="text"
                minLength
                className="validate"
                required
              />
              <label for="telefono">Identificación</label>
              <MsgValidate />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Representante.defaultProps = {
  show: false,
};
