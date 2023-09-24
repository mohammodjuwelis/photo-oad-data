function photoGetData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))
}


function displayPhoto(data) {
    // get the photoContainer the id element 
    const photoContainer = document.getElementById('photoContainer');
    for(let singleData of data) {
        // console.log(singleData.title)
        // the create child dev 
        const childDiv = document.createElement('div');
        childDiv.classList.add('photo')
        // the create some child element 
        childDiv.innerHTML = `
        <p>title: ${singleData.title}</p>
        <img src="${singleData.url}" alt="">
        `;
        // set childDev 
        photoContainer.appendChild(childDiv)
        
    }
}

photoGetData();