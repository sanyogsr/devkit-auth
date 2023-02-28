import React from 'react'
import { useState, useEffect } from 'react';


function data() {
  return (
    <>
    {airtable()}
    {AirtableData1()}
    {AirtableData2()}
    </>
  )
}
function airtable(){
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await fetch('/api/apdata/airtable');
        const json = await res.json();
        setTableData(json.records);
      }
      fetchData();
    }, []);

    return(
        <>
<h1>founders</h1>
   <div>
   
    <table className='table-auto' border='1'>
      <thead>
        <tr>
          
        <th>Company Name</th>
          <th>Website</th>
          <th>Name</th>
          <th>LinkedIn</th>
          
          {/* add more columns here as needed */}
        </tr>
      </thead>
      <tbody>
        {tableData.map((record) => (
          <tr key={record.id}>
            <td>{record.fields['Company Name']}</td>
            <td><a href={record.fields['Website']}>{record.fields['Website']}</a></td>
            <td>{record.fields['Name']}</td>
            <td><a href={record.fields['LinkedIn']} target="_blank">{record.fields['LinkedIn']}</a></td>
            
           
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    </>
    )
}

//job applicants
function AirtableData1() {
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('/api/apdata/airtable1');
        const json = await res.json();
        setTableData(json.records);
      }
      fetchData();
    }, []);
  
  
    return (
      <>
     <div>
      <h1>Job Applicants</h1>
      <table  border = '1' className="">
        <thead>
          <tr>
            
          
            <th>Name</th>
            <th>LinkedIn</th>
            
            {/* add more columns here as needed */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((record) => (
            <tr key={record.id}>
              
              <td>{record.fields['Name']}</td>
              <td><a href={record.fields['LinkedIn']} target="_blank">{record.fields['LinkedIn']}</a></td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
  
      </div>
  
  
  
  </>
    );
  }


  //data3 Hr

  function AirtableData2() {
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('/api/apdata/airtable2');
        const json = await res.json();
        setTableData(json.records);
      }
      fetchData();
    }, []);
      
  
    
    return (
      <>
     <div>
      <h1>HR</h1>
      <table  border = '1' className="">
        <thead>
          <tr>
            
          
            <th>Name</th>
            <th>LinkedIn</th>
            
            {/* add more columns here as needed */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((record) => (
            <tr key={record.id}>
              
              <td>{record.fields['Name']}</td>
              <td><a href={record.fields['LinkedIn']} target="_blank">{record.fields['LinkedIn']}</a></td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
  
      </div>
  
  
  
  </>
    );
  }


export default data