import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SortFilterTable(props) {
    return (
        <div className="container-fluid bg-lightgray m-0 pt-3 bold-text">
            <div className="row">
                <div className="col-4 mb-1 mx-1">
                    Sort by
                    <select className="form-control " onChange={({ target }) => props.sortChange(target.value)}>
                        <option> ID </option>
                        <option> Name </option>
                        <option> Department </option>
                    </select>
                </div>
                <div className="col-auto">
                    Search by name <input className="form-control" onChange={({ target }) => props.searchChange(target.value)}></input>
                </div>
            </div>
        </div >
    );
}