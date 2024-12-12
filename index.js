const inputfield=document.querySelector('#password');
const outputfield=document.querySelector('#output');


inputfield.addEventListener('input',function(){
    console.log(inputfield.value);
    let password=inputfield.value;
    if(password.length<8){
        outputfield.innertText='Password is too short';
        outputfield.style.color='red';


    }else{
        // outputfield.innertText='Password is long enough';
        // outputfield.style.color='green';


        //a-z
        //A-Z
        //0-9
        //special character !@#$%^&*()_+~{}[]:"|;'\'?|/\<>,."

        console.log("is loercase",password.search(/[a-z]/));
        if(password.search(/[a-z]/) == -1){
            outputfield.innertText='Password is missing a lowercase letter';
            outputfield.style.color='red';

        }else if(password.search(/[A-Z]/) == -1){
            outputfield.innertText='password is missing a UpperCase letter';
            outputfield.style.color='red';

        }
        else if(password.search(/[0-9]/) == -1){
            outputfield.innertText='password is missing numeric letter';
            outputfield.style.color='red';
        }else if(password.search(/[!\@\#\$\%\^\&\*\(\)\+\<\>\?\;\:\[\]\,\.\-]/) == -1){
            outputfield.innertText='password is missing a spacial charectere letter';
            outputfield.style.color='red';
        }
        else {
            outputfield.innertText='Password is strong';
            outputfield.style.color='green';

        }


    }
})