import React from "react";

export default class Nav extends React.Component {

    render() {
        return (
            <div className="col-12 m-0 p-0">
                <ul className="nav flex-column">
                    {
                        this.props.data.map((data) => (
                            <li className="nav-item">
                                <button onClick={(e) => this.props.handleChange(e, data.id)} value={data.id} className={data.active ? " btn rounded-circle active" : "nav-link btn rounded-circle" } data-bs-toggle="tooltip" title={data.tip}><span className="iconify" data-icon={data.icon}></span></button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}