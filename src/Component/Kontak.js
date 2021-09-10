import React from 'react';
import Animate from '@charlesvien/react-animatecss';

export default class Kontak extends React.Component {
    render() {
        return (
            <Animate animationIn="slideInUp"
                animationOut="slideOutUp"
                inDuration={1000}
                outDuration={1000}
                visible>
                <div className="pt-4 col-12 m-0 p-2" id="pengalaman">
                    <div className="col-12 m-0 p-0 row">
                        <div className="col-8 m-0 p-2">
                            <div className="col-12 mt-5 mb-3 p-0 text-uppercase" id="heading">
                                <h1>Rezal Wahyu Pratama<br /><span className="color-orange">Web</span> Developer</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5 pt-5 p-0 body">
                        <h2 className="text-center text-uppercase">Kontak</h2>
                        <div className="col-12 mt-5 mb-2 p-2">
                            <table class="table table-sm table-borderless">
                                <tbody>                                            
                                    <tr>
                                        <td className="pe-5 ps-5">
                                            <div className="name-univ m-0 p-0">Alamat</div>
                                        </td>
                                        <td className="ps-5 pe-5">
                                            <p className="pt-2">
                                                Tambakromo, Pati, Jawa Tengah, Indonesia
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pe-5 ps-5">
                                            <div className="name-univ m-0 p-0">Email</div>
                                        </td>
                                        <td className="ps-5 pe-5">
                                            <p className="pt-2">
                                                rezalwahyu10@gmail.com
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pe-5 ps-5">
                                            <div className="name-univ m-0 p-0">Telegram</div>
                                        </td>
                                        <td className="ps-5 pe-5">
                                            <p className="pt-2">
                                                @rezal11
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pe-5 ps-5">
                                            <div className="name-univ m-0 p-0">LinkedIn</div>
                                        </td>
                                        <td className="ps-5 pe-5">
                                            <p className="pt-2">
                                                <a href="https://www.linkedin.com/in/rezal-wahyu-pratama-5a20251a2/">Rezal (Kecank) Wahyu Pratama</a>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Animate>
        )
    }
}