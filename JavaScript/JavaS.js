function login(){
	var user = ["Johnston", "Mancuso", "Kelly", "Fedorovic"] /** This is the code for usernames using an array **/ 
	var pass = ["Liam", "Sacha", "Will", "Andre"]	/** This is the code for passwords using an array **/ 
	var prompt1 = prompt("Please enter Username");
	var prompt2 = prompt("Please enter password");
	
	for (i = 0; i <= user.length; i++){
		if (prompt1 === user[i] && prompt2 === pass[i]){
			alert("Welcome "+ user[i] +" ");
			document.getElementById("user").innerHTML = "Welcome " + user[i]; /** This happens when you get loged in **/
		}
	}
}
