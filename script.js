let wordValue = document.querySelector('#input3')
let btn = document.querySelector('#button2');
let card2 = document.getElementById('card2');
let spinner = document.getElementsByClassName('spinner')[0]
spinner.style.display = "none"
let fetchedData = async () => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        let word = wordValue.value;
        spinner.style.display = "block"

        setTimeout(() => {
            spinner.style.display = "none"
        }, 1000);
        try {
            let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            let response = await fetch(url);
            let data = await response.json();

            let icard = "";
            wordValue.value = ""


            for (let entry of data) {
                icard += `
                    <h5 class="card-title" style="font-size:2rem">${entry.word}</h5>`
                for (let meaning of entry.meanings) {
                    for (let definition of meaning.definitions) {
                        icard += `<h6 class="card-subtitle mb-2 text-body-secondary">${meaning.partOfSpeech}</h6><p class="card-text" id="meanings">${definition.definition}</p>`;
                    }
                }
            }
        
            card2.innerHTML = icard;
        } catch (error) {
            alert("Enter a valid word")
        }
   

       

    });
};

fetchedData();






