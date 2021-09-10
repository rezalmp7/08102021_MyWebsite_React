import React from 'react';

import Nav from "./Nav";
import Home from "./Home";
import Pengalaman from "./Pengalaman";
import Portofolio from "./Portofolio";
import Kontak from "./Kontak";


export default class ContainerLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: [
                { id: 1, icon: "ant-design:home-filled", tip: "Home", active: true },
                { id: 2, icon: "eos-icons:job", tip: "Pengalaman", active: false },
                { id: 3, icon: "eos-icons:project", tip: "Portofolio", active: false },
                { id: 4, icon: "bx:bxs-contact", tip: "Contact", active: false },
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, dataKey) => {
        const spreadMenu = [...this.state.Data];
        var i = 0;
        var hasilSpread = [];
        do {
            if (spreadMenu[i].id === dataKey)
            {
                hasilSpread = [...hasilSpread, {id: spreadMenu[i].id, icon: spreadMenu[i].icon, tip: spreadMenu[i].tip, active: true}]
            }
            else
            {
                if(spreadMenu[i].active === true)
                {
                    hasilSpread = [...hasilSpread, { id: spreadMenu[i].id, icon: spreadMenu[i].icon, tip: spreadMenu[i].tip, active: false }]
                }
                else
                {
                    hasilSpread = [...hasilSpread, spreadMenu[i]]
                }
            }
            i++;
        }
        while (i < spreadMenu.length);

        this.setState({
            Data: [...hasilSpread]
        })
    }

    render() {

        const menuActive = this.state.Data.filter(function (menu) {
            return menu.active;
        });
        
        var content;
        switch (menuActive[0].id) {
            case 1:
                content = <Home />;
                break;
            case 2:
                content = <Pengalaman />;
                break;
            case 3:
                content = <Portofolio />;
                break;
            case 4:
                content = <Kontak />;
                break;
            default:
                break;
        }

        return (
            <div className="col-12 m-0 p-0 row">
                <div className="col m-0 p-2">
                    <div className="col-12 m-0 p-0" id="content">
                        {content}
                    </div>
                </div>
                <div className="m-0 ps-1" id="nav">
                    <Nav data={this.state.Data} handleChange={this.handleChange} />
                </div>
                <div className="text-center col-12 p-2 m-0" id="footer">
                    Design From <a href="https://www.figma.com/community/file/966954657029620690">Portfolio Template | Resume Template</a> By <a href="https://www.figma.com/@designhunterrbd">Shakil Khan</a>
                </div>
            </div>
        )
    }
}

