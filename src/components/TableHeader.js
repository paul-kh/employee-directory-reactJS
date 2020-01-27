import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function TableHeader(props) {
    return (
        <div className="container-fluid mt-0">
            <div className="row bold-text bg-lightgreen text-black p-1">
                <div className="col-1">ID</div>
                <div className="col-2">Name</div>
                <div className="col-3">Role</div>
                <div className="col-2">Department</div>
                <div className="col-4">E-mail</div>
            </div>
        </div>
    );
}