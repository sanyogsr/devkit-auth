import axios from 'axios';

export default async function handler(req, res) {
  const { data } = await axios.get( `https://api.airtable.com/v0/appqrDRnxZ2LVrTa9/HR?api_key=keyPjBSBwGXsAbJOS`
  );
  res.status(200).json(data);

  console.log(data);
}
