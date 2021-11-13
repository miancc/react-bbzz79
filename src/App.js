import React, { Component } from 'react';
import { Domicilio, Empresa, Representante } from './components/index';
import Util from './Helpers/Util';

export default class App extends Component {
  constructor() {
    super();
    this.language = localStorage.language;
    this.state = {
      tStep: 1,
      disableNext: false,
      data: {},
    };
  }

  nextStep = (isNext) => {
    const { tStep, disableNext, data: D } = this.state;
    if (!isNext) return this.setState({ tStep: tStep + 1 });
    // Se verifica si se esta en el paso uno o en algun otro y se obtiene la información del componente Step
    const stepRef = this[`step${tStep}Ref`];
    if (!stepRef)
      return Util.getMsnDialog('warning', 'Imposible to get Stepper Instance!');
    const { data, error } = stepRef.getDataForm();
    if (error) return;
    let dataT = Object.assign({}, D, data);
    this.setState({ tStep: tStep + 1, data: dataT });
  };

  render() {
    let { tStep, disableNext } = this.state;
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <Empresa
                onRef={(ref) => (this.step1Ref = ref)}
                show={tStep == 1}
              />
              <Domicilio
                title="Dirección Empresa"
                onRef={(ref) => (this.step2Ref = ref)}
                show={tStep == 2}
              />
              <Representante
                onRef={(ref) => (this.step3Ref = ref)}
                show={tStep == 3}
              />
              <Domicilio
                title="Dirección Representante"
                id="2"
                onRef={(ref) => (this.step4Ref = ref)}
                show={tStep == 4}
              />
            </div>
            <div className="card-action">
              {tStep > 1 && (
                <a
                  className="btn-floating btn-small"
                  onClick={() => this.nextStep(false)}
                >
                  <i className="material-icons prefix">arrow_back</i>
                </a>
              )}
              <span> </span>
              <a
                className="btn-floating btn-small"
                onClick={() => this.nextStep(true)}
              >
                <i className="material-icons prefix">arrow_forward</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
