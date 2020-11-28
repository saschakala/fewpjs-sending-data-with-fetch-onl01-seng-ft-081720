// Add your code here

function submitData(name, email) {

    const body = document.querySelector('body')

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }; 

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML += `${object.name} ${object.email} ${object.id}`; 
        body.appendChild(paragraph);
      })
      .catch(function(error){
        const paragraph = document.createElement('p');
        paragraph.innerHTML += `${error.message}`;
        body.appendChild(paragraph);
      })



}