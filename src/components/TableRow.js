import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function TableRow({ id, name, role, department, email }) {
    return (
        <div className="container-fluid">
            <div className="row row-border-bottom bg-lightgray">
                <div className="col-1">{id}</div>
                <div className="col-2">{name}</div>
                <div className="col-3">{role}</div>
                <div className="col-2">{department}</div>
                <div className="col-4">{email}</div>
            </div>
        </div>
    );
}