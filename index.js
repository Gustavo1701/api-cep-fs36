// const consultaCep = (cep) => {
//     const cep = document.getElementById('idCep').value;
    
//     fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('logradouro').value = data.logradouro;
//         document.getElementById('bairro').value = data.bairro;
//         document.getElementById('cidade').value = data.localidade;
//         document.getElementById('uf').value = data.uf;
//         })

// }

const cep = document.getElementById('idCep').value;

const consutaCep = async () => {
    let cepVelue = cep.value;

    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

//   getUser('60861635');