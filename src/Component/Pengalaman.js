import React from 'react';
import Animate from '@charlesvien/react-animatecss';

class Pendidikan extends React.Component {
    render() {
        return (
            <div className="col-12 mt-5 pt-5 p-0 body">
                <h2 className="text-center text-uppercase">Pendidikan</h2>
                <div className="col-12 m-0 p-0 justify-content-md-center row">
                </div>
                <div className="col-12 mt-5 mb-2 p-2">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td className="pe-5 ps-5">
                                    <div className="name-univ m-0 p-0">Universitas PGRI Semarang</div>
                                    <div className="ket mt-2 p-0">
                                        <span className="m-0 p-0 sebagai">Student</span><span className="ms-2 rounded period">Aug 2017 - Jun 2021</span>
                                    </div>
                                </td>
                                <td className="ps-5 pe-5">
                                    <div className="prestasi m-0 p-0">Teknik Informatika</div>
                                    <p className="pt-2">
                                        <h6>Pengalaman Organisasi</h6>
                                        <ul>
                                            <li>Ketua Umum ELKA Sinematografi / Jan 2020 - Des 2020</li>
                                            <li>Wakil Ketua Umum ELKA Sinematografi / Jan 2019 - Des 2019</li>
                                            <li>Editor Berita Kampus UPGRIS Kompas TV / Jan 2019 - Des 2020</li>
                                        </ul>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="pe-5 ps-5">
                                    <div className="name-univ m-0 p-0">SMK Taruna Bangsa</div>
                                    <div className="ket mt-2 p-0">
                                        <span className="m-0 p-0 sebagai">Student</span><span className="ms-2 rounded period">2014 - 2017</span>
                                    </div>
                                </td>
                                <td className="ps-5 pe-5">
                                    <div className="prestasi m-0 p-0">Teknik Komputer Jaringan</div>
                                    <p className="pt-2">
                                        <h6>Prestasi</h6>
                                        <ul>
                                            <li>Juara 2 LKS Networking Support Kab. Pati</li>
                                        </ul>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class PengalamanKerja extends React.Component {
    render() {
        return (
            <div className="col-12 mt-5 pt-5 p-0 body">
                <h2 className="text-center text-uppercase">Pengalaman Kerja</h2>
                <div className="col-12 m-0 p-0 justify-content-md-center row">
                </div>
                <div className="col-12 mt-5 mb-2 p-2">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td className="pe-5 ps-5">
                                    <div className="name-univ m-0 p-0">CV Fun Teknologi</div>
                                    <div className="ket mt-2 p-0">
                                        <span className="ms-2 rounded period">Mar 2020 - Aug 2021</span>
                                    </div>
                                </td>
                                <td className="ps-5 pe-5">
                                    <div className="prestasi m-0 p-0">Web Developer</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="pe-5 ps-5">
                                    <div className="name-univ m-0 p-0">lindungihutan</div>
                                    <div className="ket mt-2 p-0">
                                        <span className="ms-2 rounded period">Jan 2020 - Mar 2020</span>
                                    </div>
                                </td>
                                <td className="ps-5 pe-5">
                                    <div className="prestasi m-0 p-0">Video Editor</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default class Pengalaman extends React.Component {
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
                        <Pendidikan />
                        <PengalamanKerja />
                    </div>
                    
                </div>
            </Animate>
        )
    }
}