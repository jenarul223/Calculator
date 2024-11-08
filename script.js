var display = document.querySelector(".display");
  
  //clear
    function clearDisplay() {
    display.value = "";
    }
    
    //Input
    function calculator (input){
      display.value += input;
    }
    
    //calculate
    function calculate(){
      try{
       display.value = eval(display.value);
      }
      catch(error){
        var err = "Format Error";
        display.value = err;
      }
      
      if(display.value ==err){
        display.style.color= "black";
      }
    }
    function deletToDisplay(input){
      display.value = display.value.toString().slice(0,-1);
      if(display.value == "Format Error"){
        display.value = "";
      }
    }
