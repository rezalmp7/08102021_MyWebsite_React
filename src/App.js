import React from 'react';
import './Sass/App.scss';

import ComponentLeft from './Component/ComponentLeft';
import ComponentRight from './Component/ComponentRight';



export default class App extends React.Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0">
        <div className="col-2 ps-1 m-0" id="container-left">
          <ComponentLeft />
        </div>
        <div className="col-10 pe-1 m-0" id="container-right">
          <ComponentRight />
        </div>
      </div>
    )
  }
}

