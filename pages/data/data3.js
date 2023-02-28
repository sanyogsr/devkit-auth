import { useEffect,useState } from "react";

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

  export default AirtableData2
