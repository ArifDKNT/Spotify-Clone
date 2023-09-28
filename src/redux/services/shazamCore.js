const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '20c6c18ed9msh419b1f8cce3b130p1f511bjsn81f7e3d0629d',
      'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));