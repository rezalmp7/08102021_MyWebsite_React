import React from 'react';
import './Sass/App.scss';

import ComponentLeft from './Component/ComponentLeft';
import ComponentRight from './Component/ComponentRight';

import MediaQuery from 'react-responsive'

export default class App extends React.Component {
  render() {

    return (
      <div className="col-12 m-0 p-0">
        <MediaQuery minWidth={1000}>
          <div className="col-12 row p-0 m-0">
            <div className="col-2 ps-1 m-0" id="container-left">
              <ComponentLeft />
            </div>
            <div className="col-10 pe-1 m-0" id="container-right">
              <ComponentRight />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minResolution="2dppx">
          {/* You can also use a function (render prop) as a child */}
          <div className="text-center pt-5 pb-5">
            <h3>Minimal Width untuk web ini adalah 1000px</h3>
            <h3>Jika Ingin melanjutkan di mobile bisa diaktifkan <b>situs Dekstopnya</b></h3>
            <br />
            <br />
            <div className="col-12 m-1 p-0">
              <a href="https://www.linkedin.com/in/rezal-wahyu-pratama-5a20251a2/" className="iconSosmed btn btn-success m-0 text-center"><span className="iconify" data-icon="akar-icons:linkedin-fill"></span> - Rezal Wahyu Pratama</a>
            </div>
            <div className="col-12 m-1 p-0">
              <a href="https://www.instagram.com/rezal.mp7/" className="iconSosmed btn btn-success m-0 text-center"><span className="iconify" data-icon="ant-design:instagram-filled"></span> - Rezal Wahyu Pratama</a>
            </div>
            <div className="col-12 m-1 p-0">
              <a href="https://twitter.com/RezalWahyuPrat1" className="iconSosmed btn btn-success m-0 text-center"><span className="iconify" data-icon="akar-icons:twitter-fill"></span> - Rezal Wahyu Pratama</a>
            </div>
            <div className="col-12 m-1 p-0">
              <a href="https://web.facebook.com/rezal.pratama.940" className="iconSosmed btn btn-success m-0 text-center"><span className="iconify" data-icon="brandico:facebook"></span> - Rezal Wahyu Pratama</a>
            </div>
            <div className="col-12 m-1 p-0">
              <a href="https://github.com/rezalmp7" className="iconSosmed btn btn-success m-0 text-center"><span className="iconify" data-icon="akar-icons:github-fill"></span> - Rezal Wahyu Pratama</a>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

