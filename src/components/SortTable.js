import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SortFilterTable(props) {
    return (
        <div className="container-fluid bg-lightgray m-0 pt-3 bold-text">
            <div className="row">
                <div className="col-4 mb-1 mx-1">Sort by </div>
            </div>
            <div className="row">
                <div className="col-4">
                    {/* raise onChange event to the parent element "App" */}
                    <select className="form-control " onChange={({ target }) => props.onChange(target.value)}>
                        <option> ID </option>
                        <option> Name </option>
                        <option> Department </option>
                    </select>
                </div>
            </div>
        </div >
    );
}