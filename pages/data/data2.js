import { useState, useEffect } from "react";

function Airtabledata3(){
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
export default Airtabledata3()