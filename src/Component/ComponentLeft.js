import React from 'react';

class Sosmed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const style = {
            width: 30,
            height: 30,
        }
        return (
            <a href={this.props.link} style={style} className="iconSosmed rounded-circle p-0 m-0 ms-1 d-block text-center"><span className="iconify" data-icon={this.props.dataIcon}></span></a>
        )
    }
}

class Top extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-12 pt-5">
                <div className="row p-0 m-0 justify-content-md-center">
                    <img className="col-8 rounded-pill" src={this.props.src} />
                </div>
                <h5 className="p-0 pt-2 m-0 text-center">Rezal Wahyu Pratama</h5>
                <p className="p-0 m-0 text-center">Web Developer</p>
                <div className="row justify-content-md-center pt-4 m-0">
                    <Sosmed link="https://www.linkedin.com/in/rezal-wahyu-pratama-5a20251a2/" dataIcon="akar-icons:linkedin-fill" />
                    <Sosmed link="https://www.instagram.com/rezal.mp7/" dataIcon="ant-design:instagram-filled" />
                    <Sosmed link="https://twitter.com/RezalWahyuPrat1" dataIcon="akar-icons:twitter-fill" />
                    <Sosmed link="https://web.facebook.com/rezal.pratama.940" dataIcon="brandico:facebook" />
                    <Sosmed link="https://github.com/rezalmp7" dataIcon="akar-icons:github-fill" />
                </div>
            </div>
        )
    }
}

export default class ContainerLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tahunIni: new Date()
        }
    }

    render() {
        return (
            <div className="col-12">
                <Top src="./img/Profile.png" />
                <div className="col-12 p-2">
                    <table className="table table-borderless">
                        <tr>
                            <td className="p-2"><span className="orange">Age:</span></td>
                            <td className="text-end">{this.state.tahunIni.getFullYear() - 2000}</td>
                        </tr>
                        <tr>
                            <td className="p-2"><span className="orange">Residence:</span></td>
                            <td className="text-end">IDN</td>
                        </tr>
                        <tr>
                            <td className="p-2"><span className="orange">Freelance:</span></td>
                            <td className="text-end text-success">Available</td>
                        </tr>
                        <tr>
                            <td className="p-2"><span className="orange">Address:</span></td>
                            <td className="text-end">Pati, Jawa Tengah</td>
                        </tr>
                    </table>
                </div>
                <div className="p-2 col-12 m-0">
                    <a href="./doc/CV Rezal Wahyu Pratama.pdf" className="btn text-center col-12 btn-cv">Download CV <span class="iconify" data-icon="bx:bxs-download"></span></a>
                </div>
            </div>
        )
    }
}

