    document.addEventListener('DOMContentLoaded', () => {
        /* primary variables */
        let wrapper = document.querySelector('.wrapper');
        let inputGeneratedPassword = wrapper.querySelector(':scope .generated-password');
        let btn = wrapper.querySelector(':scope button');
        let radioInputs = wrapper.querySelectorAll(':scope input[type="radio"]');
        
        /* array to generate a new passwords */
        let tab = ['a', 'k', 'N', 'W', 'x', '7', 'h', 'o', 'n', '*', '?', '/', 'r', '8', 'j', 'n', '=', 'h', '#', '5', '-', 'g', 'b', '*', 'm'];
        
        /* clean input with the generated password */
        inputGeneratedPassword.addEventListener("click", function(){
            this.setAttribute('value', '');
        });

        btn.addEventListener("click", function(){
            for(let i=0; i<radioInputs.length; i++){
                if(radioInputs[i].checked){
                    let value = parseInt(radioInputs[i].value);
                    let randomNumbers = [];
                    let password = "";
                    
                    /* for the password which will contains a six chars */
                    if(value === 6){
                        for(let i = 0; i<value; i++){
                            randomNumbers[i] = Math.floor(Math.random() * (24-0+1)+0);
                        }

                        for(let j = 0; j<randomNumbers.length; j++){
                            if(j % 2 === 0)
                                password += tab[randomNumbers[j]].toUpperCase();
                            else
                                password += tab[randomNumbers[j]].toLowerCase();                        
                        }
                        inputGeneratedPassword.value = password; 
                    }
                    
                    /* for the password which will contains a eight chars */
                    if(value === 8){
                        for(let i = 0; i<value; i++){
                            randomNumbers[i] = Math.floor(Math.random() * (24-0+1)+0);
                        }

                        for(let j = 0; j<randomNumbers.length; j++){
                            if(j % 2 === 0)
                                password += tab[randomNumbers[j]].toUpperCase();
                            else
                                password += tab[randomNumbers[j]].toLowerCase();      
                        } 
                        inputGeneratedPassword.value = password; 
                    }
                    
                    /* for the password which will contains a ten chars */
                    if(value === 10){
                        for(let i = 0; i<value; i++){
                            randomNumbers[i] = Math.floor(Math.random() * (24-0+1)+0);
                        }

                        for(let j = 0; j<randomNumbers.length; j++){
                            if(j % 2 === 0)
                                password += tab[randomNumbers[j]].toUpperCase();
                            else
                                password += tab[randomNumbers[j]].toLowerCase();    
                        }
                        inputGeneratedPassword.value = password; 
                    }
                }
            }
        })
    })