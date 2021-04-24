const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/user'

async function getData() {
  try {
    const { data } = await axios.get(url)
    console.log(JSON.stringify(data));
  } catch (e) {
    console.log(e.response.status);
  }
}

function getData2(){
  axios.get(url)
    .then((res) => {
      console.log(res);
    })
    .catch(({ response }) => {
      console.log(response.status,response.data);
    })
}


console.log(getData())
