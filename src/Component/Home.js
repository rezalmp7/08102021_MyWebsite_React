import React from 'react';
import Animate from '@charlesvien/react-animatecss';

export default class Home extends React.Component {
    render() {
        return (
            <Animate animationIn="slideInUp" animationOut="slideOutUp" inDuration={1000} outDuration={1000} isVisible={true}>
                <div className="pt-4 col-12 m-0 p-2" id="home">
                    <div className="col-12 m-0 p-0 row">
                        <div className="col-8 m-0 p-2">
                            <div className="col-12 mt-5 mb-3 p-0 text-uppercase" id="heading">
                                <h1>Rezal Wahyu Pratama<br /><span className="color-orange">Web</span> Developer</h1>
                            </div>
                            <div className="col-12 m-0 p-2">
                                <p>
                                    Website ini dibuat menggunakan React JS sebagai bahasa dasarnya, dan SASS sebagai pengganti CSS tanpa panel admin,<br /><br />Developer hanya ingin mencoba React JS dan SASS, <span className="text-success">Terima Kasih Terlah Berkujung</span> <br /><br />Fitur responsifenya masih tahap <span className="text-danger">maintenance</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-4 m-0 p-2">
                            <div className="col-12 m-0 p-0 justify-content-md-center">
                                <img className="col-8 m-0 p-0" src="./img/Photo.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </Animate>
        )
    }
}