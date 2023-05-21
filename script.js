let encryptBtn = document.getElementById('encrypt-btn');
let eInput = document.getElementById('encryptedinput-1');
let pInput = document.getElementById('pltxt');
let inputs = [eInput,pInput]

inputs.forEach( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase()
    }
})
function encrypt(){
    let pInput = document.getElementById('pltxt').value;
    let solved = ''
    let shiftInput = parseInt(document.getElementById('key').value)

    for(var i=0; i< pInput.length; i++){
        let ascii_num = pInput[i].charCodeAt()
        let sum = ascii_num + shiftInput
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
    }
    eInput.value = solved
}
encryptBtn.addEventListener('click', encrypt)


let decryptBtn = document.getElementById('decrypt-btn');
let dInput = document.getElementById('decryptedinput-1');
let enInput = document.getElementById('cptxt');
let inputss = [eInput,pInput]

inputss.forEach( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase()
    }
})
function decrypt(){
    let enInput = document.getElementById('cptxt').value;
    let solved = ''
    let shiftInput = parseInt(document.getElementById('key').value)

    for(var i=0; i< enInput.length; i++){
        let ascii_num = enInput[i].charCodeAt()
        let sum = ascii_num - shiftInput
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
    }
    dInput.value = solved
}
decryptBtn.addEventListener('click', decrypt)

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  function encryption(){
//     document.querySelector("#encrypt-btn").addEventListener("click",function(){

// //         //getting a input
//        var input = document.getElementById("pltxt").value
//         console.log(input)

// //         //getting a key
//        var key = document.getElementById("key").value
//          console.log(key)

//         //const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
//         //                     'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    //  })
    // }

// //const Encrypt = document.querySelector("#encrypt-btn")
// //const Decrypt = document.querySelector("#decrypt-btn")
// const key = document.querySelector("#key")

// const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//                      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

// let newText = '';

// encrypt-btn.addEventListener('click', () => {
//     const textarea = document.querySelector('#pltxt');
//     const keyValue = Number(key.value);

//     for(const letter of textarea.value) {
//         if(!listLetters.includes(letter)) {
//             continue
//         }

//         const indexLetter = listLetters.findIndex((item) => item === letter);
//         let indexNewLetter = indexLetter + keyValue

//         if(indexNewLetter > 25) {
//             indexNewLetter -= 26;
//         }
//         newText += listLetters[indexNewLetter];
//         textarea.value = newText;
//     }   
//     newText = '';
//  }
//  )
// }
//encryption()

function btnClicking() {
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "block ";
        document.querySelector("#encryption").style.display = "none ";
        document.querySelector("#dec-btn").style.backgroundColor = "#333";
        document.querySelector("#enc-btn").style.backgroundColor = "#222";
        document.querySelector("#main>h1>span>img").style.rotate = "180deg";

    });
    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#encryption").style.display = "block ";
        document.querySelector("#decryption").style.display = "none ";
        document.querySelector("#enc-btn").style.backgroundColor = "#333";
        document.querySelector("#dec-btn").style.backgroundColor = "#222";
        document.querySelector("#main>h1>span>img").style.rotate = "360deg";
    });
  }
  btnClicking()