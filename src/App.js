// *******************************************************************************************************************
// *** This is the PARENT COMPONENT of 4 children (1. SortTable, 2. FilterTable, 3. TableHeader, and 4. TableRow) ****
// *******************************************************************************************************************
import React, { useState } from 'react';
import './App.css';
import SortTable from "./components/SortTable";
import FilterTable from "./components/FilterTable";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

import { employees } from "./data";

// ********************************
// *** THE MAIN FUNCTION "App" ****
// ********************************
export default function App() {
  const [sortBy, setSortBy] = useState("ID");
  const [isFiltered, setIsFiltered] = useState(false);
  const [empData, setEmpData] = useState(employees);

  return (
    <div >
      <h1 className="App">Employee Directory</h1>
      {/* Handle onChange events raised from the child components "SortTable" & "FilterTable" */}
      <SortTable sortChange={handleSortChange} searchChange={handleSearchChange} />
      <FilterTable filterChange={handleFilterChange} />
      <TableHeader />
      {empData.map(emp => <TableRow id={emp.id} key={emp.id} name={emp.name} role={emp.role} department={emp.department} email={emp.email} />)}
      {/* {conditionalRender()} */}
    </div>
  );

  function handleSearchChange(value) {
    let newData = empData.filter(e => e.name.toLocaleLowerCase().indexOf(value) !== -1);
    if (value === "") {
      setEmpData(employees);
    }
    else {
      setEmpData(newData);
    }
    // setEmpData();
    // console.log(empData);
  }

  // Sort by value that user select in the seletion box
  // Parent component handles "onChange" event raised by child component "SortTable"
  // This is how the parent receives props value from child
  // It receives value of the select box and update this value in the state

  function handleSortChange(sortBy) {
    let sortedArray = [];
    // Solution found on Stack Overflow
    // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    switch (sortBy) {
      case "Name":
        setSortBy("Name");
        sortedArray = employees.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        setEmpData(sortedArray);
        break;
      case "ID":
        setSortBy("ID");
        sortedArray = employees.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        setEmpData(sortedArray);
        break;
      case "Department":
        setSortBy("Department");
        sortedArray = employees.sort((a, b) => (a.department > b.department) ? 1 : ((b.department > a.department) ? -1 : 0));
        setEmpData(sortedArray);
        break;
      default:
    }
  }

  // Parent component handles "onChange" event raised by child component "FilterTable"
  // This is how the parent receives props value from child
  // It detects the checkbox status then update the value in the state variable "isFiltered"
  function handleFilterChange(checked) {
    if (checked) {
      setEmpData(empData.filter(e => e.role.toLocaleLowerCase().search("manager") >= 0));
    } else (setEmpData(employees));
  }

  // Filter by "manager". The function returns an array of JSX strings to be rendered
  function filter(checked) {
    if (checked) {
      setEmpData(empData.filter(e => e.role.toLocaleLowerCase().search("manager") >= 0));
    }
    else (setEmpData(employees));
    // let filteredArray;
    // // string.search("searchWord") return position of the found word; if not found, it return -1
    // // solution found on w3schools.com: https://www.w3schools.com/jsref/jsref_search.asp
    // filteredArray = ;
    // return filteredArray.map(emp => <TableRow id={emp.id} key={emp.id} name={emp.name} role={emp.role} department={emp.department} email={emp.email} />);
  }
}

