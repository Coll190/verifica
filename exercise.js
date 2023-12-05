window.addEventListener("DOMContentLoaded", e =>{
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button =>{
        button.addEventListener("click", e =>{
            let targe =e.target;
            let buttonId= button.id;
            console.log(`you clicked on : ${buttonId}`);
            let calcol = document.querySelector("#calc");
            
            if(e.target.id=="="){
                console.log("=");
                let result = eval(calcol.innerText);
                calcol.innerText += button.id;
                calcol.innerText += result;
                console.log(result);
            }
            else{
                calcol.innerText += button.id;
            }

            if(e.target.id=="<"){
                const tmp = calcol.innerText.slice(0, -2);
                console.log(tmp);
                calcol.innerText = tmp;
            }

            if(e.target.id=="c"){
                const tmp2 = calcol.innerText.slice(0, 0);
                console.log(tmp2);
                calcol.innerText = tmp2;
            }
        });
    });
});