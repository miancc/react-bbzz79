import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Util from '../Helpers/Util';
import { MsgValidate } from './Common';

export default class Domicilio extends Component {
  constructor(props) {
    super(props);
    this.idForm = `form-direccion-${this.props.id}`;
    this.form = null;
  }

  // #region ------------------------------------------------> "COMPONENT" //
  componentDidMount() {
    this.form = document.getElementById(this.idForm);
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
    let { title, show, id } = this.props;
    return (
      <div className={`row ${show ? 'show' : 'hide'}`}>
        <span className="card-title">
          <h4>{title}</h4>
        </span>
        <form id={this.idForm} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id={`calle_${id}`}
                name={`calle_${id}`}
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for={`calle_${id}`}>Calle</label>
              <MsgValidate />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input
                id={`num_ext_${id}`}
                name={`num_ext_${id}`}
                type="text"
                className="validate"
                minLength={1}
                required
              />
              <label for={`num_ext_${id}`}>Num Ext</label>
              <MsgValidate />
            </div>

            <div className="input-field col s4">
              <input
                id={`num_int_${id}`}
                name={`num_int_${id}`}
                type="text"
                className="validate"
                minLength={1}
              />
              <label for={`num_int_${id}`}>Num Int</label>
              <MsgValidate />
            </div>

            <div className="input-field col s4">
              <input
                id={`cp_${id}`}
                name={`cp_${id}`}
                type="number"
                className="validate"
                min={1}
                required
              />
              <label for={`cp_${id}`}>C.P</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id={`colonia_${id}`}
                name={`colonia_${id}`}
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for={`colonia_${id}`}>Colonia</label>
              <MsgValidate />
            </div>

            <div className="input-field col s6">
              <input
                id={`ciudad_${id}`}
                name={`ciudad_${id}`}
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for={`ciudad_${id}`}>Ciudad</label>
              <MsgValidate />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id={`estado_${id}`}
                name={`estado_${id}`}
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for={`estado_${id}`}>Estado</label>
              <MsgValidate />
            </div>
            <div className="input-field col s6">
              <input
                id={`pais_${id}`}
                name={`pais_${id}`}
                type="text"
                className="validate"
                minLength={5}
                required
              />
              <label for={`pais_${id}`}>Pais</label>
              <MsgValidate />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Domicilio.defaultProps = {
  id: 1,
  title: '',
  show: false,
};
