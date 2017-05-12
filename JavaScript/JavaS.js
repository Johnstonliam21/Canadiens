function login(){
	var user = ["Johnston", "Mancuso", "Kelly", "Fedorowicz"] /** This is the code for usernames using an array **/ 
	var pass = ["Liam", "Sacha", "Will", "Andrzej"]	/** This is the code for passwords using an array **/ 
	var prompt1 = prompt("Please enter Username") /** The computer will ask this to the person trying to login first **/
	var prompt2 = prompt("Please enter password") /** The computer will ask this to the person after entering his username **/
	
	for (l = 0; l <= user.length; l++){
		if (prompt1 === user[l] && prompt2 === pass[l]){
			alert("Welcome "+ user[l] +" ")
			document.getElementById("user").innerHTML = "Welcome " + user[l]; /** This is said by the computer when you're information is correct **/
		  correct = true
            break
        }else{
            correct = false
        }
    }
    if ( correct === true) {
        document.getElementById("user").innerHTML = "Welcome" + " " + userArray[l] /** This happens when you get loged in **/
    }
    else {
        alert("Wrong Information")/** This is said when the information is wrong **/
    }
}
 