let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
    { name: "Sérgio", number: "(34)99123-7339", Endereço: "Rua 06", Casa:"166",Cidade:"Uberlândia-MG." },
    { name: "Sueli", number: "(61)85164-4589", Endereço: "Rua 04", Casa:"288",Cidade:"Presidente-Olegário-MG." },
    { name: "Silas", number: "(88)95164-9856", Endereço: "Rua 10", Casa:"777",Cidade:"Rio de Janeiro-RJ." },
    { name: "Suziany", number: "(61)98538-8790", Endereço: "Rua 313", Casa:"27",Cidade:"Santa Maria-DF." },
]

function search() {
    let found = false;
    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML =  
            `Contato encontrado!<br>
            Nome:${contacts[i].name} <br>
            Telefone: ${contacts[i].number} <br>
            Endereço:${contacts[i].Endereço} <br>
            Casa:${contacts[i].Casa} <br>
            Cidade: ${contacts[i].Cidade}`
            found = true;

            break;
        }
    }
    if (!found) {
        p.innerHTML = "Contato não encontrado, tente novamente."
    }
}

