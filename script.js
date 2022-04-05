function validatepwd(){
    console.log("In pwd");
    return false;
}

function validatemail(){
    console.log("In email");
    return true;
}

function validatelogin(){
    console.log("In login");
    return true;
}

// document.getElementById("sbmit").addEventListener("click", function(event){
    
//     if(!validatepwd()){
//         event.preventDefault();
//     }
    
//   });

//   document.getElementById("sbmit").addEventListener("click", event=>{
    
//     if(!validatepwd()){
//         event.preventDefault();
//     }});


// function validatepwd(){
//  return true;
// }


function submitter() {
    if ( !validatepwd() ) return false;
    if ( !validatemail() ) return false;
    if ( !validatelogin() ) return false;
     return true;
  }

