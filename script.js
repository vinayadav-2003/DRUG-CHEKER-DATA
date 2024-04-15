// Replace with the drug IDs or Product Concept IDs you want to check
const drugbankIds = ['DB00682', 'DB00196'];
const productConceptIds = ['DBPC0024484', 'DB00503'];
const ndcCodes = ['55154-7716', '49708-0145'];

const url = `https://api.drugbank.com/v1/ddi?`;
const params = {
  severity: 'minor,moderate,major',
  evidence: 'level_1,level_2'
};

// Add parameters to the URL
const queryString = new URLSearchParams(params).toString();
const requestUrl = `${url}${queryString}&drugs=${drugbankIds.join(',')}`;

// Fetch data from the API
fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Process the data or display the results
  })
  .catch((error) => {
    console.error('Error: ', error);
  });