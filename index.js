

const check = document.querySelector('#check');
const test = document.querySelector('#test');
let pair = document.querySelector('#pair');
let result = document.querySelector('#result');
let selectedCrypto = document.querySelector('#selectCrypto');
let selectedCurrency = document.querySelector('#selectCurrency');
let testSelect = document.querySelector("#testSelect");
const spinner = document.querySelector("#spinner"); 

check.addEventListener('click', () => {
    //fetch(`https://api.cryptonator.com/api/full/${selectedCrypto.value}-${selectedCurrency.value}`)
    fetch(`https://api.cryptonator.com/api/full/${testSelect.value}-${selectedCurrency.value}`)
    .then(res => {
        //console.log('Response is :',res);
        return res.json(); // Returns data OBJECT
    })
    .then(data => {
        console.log("Data came back as : ",data);
        pair.textContent = `${data.ticker.base} / ${data.ticker.target}`;
        spinner.remove("spinner-grow");
        result.textContent = `${data.ticker.price}`;
    })
    .catch(e => {
        console.log("Error in request",e);
       //alert("No matching PAIR found");
       pair.textContent = "No matching pair found";
       result.textContent = "";
       spinner.remove("spinner-grow");
    })
});

/* test.addEventListener('click', () => {
    fetch('https://www.cryptonator.com/api/currencies')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log("Data from Cryptonator Coin List : ", data);

  for(let i = 0; i < 10; i++) {
        console.log("...............");
            console.log(data.rows[i].name + " for request NR : "+ [i]);
      
            console.log(".............");
        }  
    })
    .catch(e => {
        console.log("Error in request : ",e);
    })
});
 */

/* testJson.addEventListener('click', () => {
fetch("assets/test.json")
 .then(res => {
     return res.json()
 })
 .then(data => {
    // Create new LI for each element from JSON document
     for(let i = 0; i < data.rows.length; i++) {
        const ul = document.getElementById("list");
        const li = document.createElement("LI");
        let textnode = document.createTextNode("Name nr "+i+" - "+data.rows[i].name);
        ul.appendChild(li);
        li.appendChild(textnode);
     }
 })
 .catch(e => {
     console.log("Error in request : ",e);
 }) 
}) */

// Testing returned data here
/* top20.addEventListener("click", () => {
    fetch("assets/test.json")
    .then(res => {
        return res.json()
    })
    .then(data => {
        for(let i = 0; i < data.rows.length; i++) {
            console.log(data.rows[i].name);
            const select = document.getElementById('testSelect');
            var option = document.createElement('option');
            option.text = data.rows[i].name;
            //option.value = i;
            let optionText = document.createTextNode(data.rows[i].name);
            select.appendChild(option);
            option.appendChild(optionText);
        }
    })
    .catch(e => {
        console.log("Error requesting : ",e);
    })
});
 */
function top20 () {
    fetch("assets/test.json")
    .then(res => {
        return res.json()
    })
    .then(data => {
        for(let i = 0; i < data.rows.length; i++) {
            //console.log(data.rows[i].name);
            const select = document.getElementById('testSelect');
            var option = document.createElement('option');
            //option.text = data.rows[i].name;
            option.value = data.rows[i].name;
            let optionValue = document.createTextNode(data.rows[i].name);
            select.appendChild(option);
            option.appendChild(optionValue);
        }
    })
    .catch(e => {
        console.log("Error requesting : ",e);
    })
};

/* function show20 () {
    //alert("JSON loaded");
    top20();
}; */