function login(){
	var user = ["Johnston", "Mancuso", "Kelly", "Fedorovic"] /** This is the code for usernames using an array **/ 
	var pass = ["Liam", "Sacha", "Will", "Andre"]	/** This is the code for passwords using an array **/ 
	var prompt1 = prompt("Please enter Username")
	var prompt2 = prompt("Please enter password")
	
	for (l = 0; l <= user.length; l++){
		if (prompt1 === user[l] && prompt2 === pass[l]){
			alert("Welcome "+ user[l] +" ")
			document.getElementById("user").innerHTML = "Welcome " + user[l]; /** This happens when you get loged in **/
		  correct = true
            break
        }else{
            correct = false
        }
    }
    if ( correct === true) {
        document.getElementById("user").innerHTML = "Welcome" + " " + userArray[l]
    }
    else {
        alert("Wrong Information")
    }
}
