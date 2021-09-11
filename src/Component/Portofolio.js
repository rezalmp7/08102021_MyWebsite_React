import React from 'react';
import Animate from '@charlesvien/react-animatecss';

class FilterNav extends React.Component {
    
    render() {
        return (
            <ul className="nav justify-content-center">
                {
                    this.props.kategori.map((kat) =>
                        <li className="nav-item">
                            <a onClick={(e) => this.props.handleClick(e, kat.id)} key={kat.id} className={kat.active ? "btn nav-link active" : "btn nav-link"}>{kat.nama}</a>
                        </li>
                    )
                }
            </ul>
        )
    }
}

class GambarPortofolio extends React.Component {
    render() {
        return (
            <div className="col-12 m-0 p-0" id="portofolio">
                <div className="col-12 justify-content-md-center row">
                    <div className="col-8 row justify-content-md-center">
                        {
                            this.props.portofolio.map((item) =>
                                <div className={item.zoom ? "col-12 p-2 m-0 gambar" : "col-4 p-2 m-0 gambar"}>
                                    <div onClick={(e) => this.props.handleZoom(e, item.id)} className="col-12 m-0 p-0 lightbox" style={{ backgroundImage: "url(" + item.img + ")" }}></div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const kategori = [
    { id: 0, nama: 'All', active: true },
    { id: 1, nama: 'Website', active: false }
];
const portofolio = [
    { id: 1, img: './img/portofolio/Image-1.png', nama: "Gambar Doang", bahasa: "HTML, CSS, JS, CodeIgniter", kategori: 1, zoom: false },
    { id: 2, img: './img/portofolio/Image-2.png', nama: "Gambar Doang", bahasa: "HTML, CSS, JS, CodeIgniter", kategori: 1, zoom: false },
    { id: 3, img: './img/portofolio/Image-3.png', nama: "Gambar Doang", bahasa: "HTML, CSS, JS, CodeIgniter", kategori: 1, zoom: false },
    { id: 4, img: './img/portofolio/Image-4.png', nama: "Gambar Doang", bahasa: "HTML, CSS, JS, CodeIgniter", kategori: 1, zoom: false },
    { id: 5, img: './img/portofolio/Image-5.png', nama: "Gambar Doang", bahasa: "HTML, CSS, JS, CodeIgniter", kategori: 1, zoom: false }
];

export default class Portofolio extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            kategori: kategori,
            portofolio: portofolio
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleZoom = this.handleZoom.bind(this);
    }

    handleClick = (e, id) => {
        const arrayKat = [...this.state.kategori];
        let i = 0;
        let finalArrayKat = [];
        do
        {
            if(arrayKat[i].id === id)
            {
                finalArrayKat = [...finalArrayKat, { id: arrayKat[i].id, nama: arrayKat[i].nama, active: true}]
            }
            else
            {
                if(arrayKat[i].active === true)
                {
                    finalArrayKat = [...finalArrayKat, { id: arrayKat[i].id, nama: arrayKat[i].nama, active: false}]
                }
                else
                {
                    finalArrayKat = [...finalArrayKat, arrayKat[i]]
                }
            }
            i++;
        }
        while (i < arrayKat.length);

        let portofolioFilter = []
        if(id === 0)
        {
            portofolioFilter = portofolio.filter(port => {
                return port.kategori !== id
            });
        }
        if (id !== 0) {
            portofolioFilter = portofolio.filter(port => {
                return port.kategori === id
            });
        } else {
            portofolioFilter = portofolio;
        }

        this.setState((state) => ({
            kategori: finalArrayKat,
            portofolio: portofolioFilter
        }));

        console.log(portofolioFilter);
    }
    handleZoom = (e, idImg) => {
        const arrayPortofolio = [...this.state.portofolio];
        let i = 0;
        let finalArrayportofolio = [];
        do {
            if (arrayPortofolio[i].id === idImg) {
                if(arrayPortofolio[i].zoom === true)
                {
                    finalArrayportofolio = [...finalArrayportofolio, { id: arrayPortofolio[i].id, img: arrayPortofolio[i].img, nama: arrayPortofolio[i].nama, bahasa: arrayPortofolio[i].bahasa, kategori: arrayPortofolio[i].kategori, zoom: false }]
                }
                else
                {
                    finalArrayportofolio = [...finalArrayportofolio, { id: arrayPortofolio[i].id, img: arrayPortofolio[i].img, nama: arrayPortofolio[i].nama, bahasa: arrayPortofolio[i].bahasa, kategori: arrayPortofolio[i].kategori, zoom: true }]
                }
            }
            else {
                if (arrayPortofolio[i].zoom === true) {
                    finalArrayportofolio = [...finalArrayportofolio, { id: arrayPortofolio[i].id, img: arrayPortofolio[i].img, nama: arrayPortofolio[i].nama, bahasa: arrayPortofolio[i].bahasa, kategori: arrayPortofolio[i].kategori, zoom: false }]
                }
                else {
                    finalArrayportofolio = [...finalArrayportofolio, arrayPortofolio[i]]
                }
            }
            i++;
        }
        while (i < arrayPortofolio.length);


        this.setState((state) => ({
            portofolio: finalArrayportofolio
        }));

        console.log(finalArrayportofolio);
    }

    render() {
        return (
            <Animate animationIn="slideInUp"
                animationOut="slideOutUp"
                inDuration={1000}
                outDuration={1000}
                visible>
                <div className="pt-4 col-12 m-0 p-2" id="portofolio">
                    <div className="col-12 m-0 p-0 row">
                        <div className="col-8 m-0 p-2">
                            <div className="col-12 mt-5 mb-3 p-0 text-uppercase" id="heading">
                                <h1>Rezal Wahyu Pratama<br /><span className="color-orange">Web</span> Developer</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5 pt-5 p-0 body">
                        <h2 className="text-center text-uppercase">Portofolio</h2>
                        <div className="col-12 m-0 p-0 justify-content-md-center row">
                            <p className="col-6 text-center">
                                Project Pribadi
                            </p>
                        </div>
                        <div className="col-12 mt-5 mb-2 p-2">
                            <div className="col-12 m-0 p-0">
                                <FilterNav kategori={this.state.kategori} handleClick={this.handleClick} />
                            </div>
                            <div className="col-12 m-0 p-0">
                                <GambarPortofolio portofolio={this.state.portofolio} handleZoom={this.handleZoom} />
                            </div>
                        </div>
                    </div>
                </div>
            </Animate>
        )
    }
}