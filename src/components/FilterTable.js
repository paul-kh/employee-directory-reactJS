import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FilterTable(props) {
    return (
        <div className="container-fluid bg-lightgray m-0 pb-3 bold-text">
            <div className="row">
                <div className="col-12">
                    <input
                        type="checkbox"
                        value="manager"
                        onChange={({ target }) => props.filterChange(target.checked)}
                    />
                    <label className="m-1"> Show only manager</label>
                </div>
            </div>
        </div >
    );
}