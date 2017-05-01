function login(){
	var user = {Possibility1: "Johnston", Possibility2: "Mancuso", Possibilty3: "Kelly"}; /** This is the code for usernames using an object **/ 
	var pass = {Poss1: "Liam", Poss2: "Sacha", Poss3: "Will"};	/** This is the code for passwords using an object **/ 
	var prompt1 = prompt("Please enter Username");
	var prompt2 = prompt("Please enter password");
	if (prompt1 === user){
		if (prompt2 === pass){
			confirm("Welcome "+ user +"")
			console.log("You're in");
			document.getElementById("user").innerHTML = "Welcome" + " " + user; /** This happens when you get loged in **/
		}else{
			alert("Wrong password"); /** This is what pops up when the password is incorrectly put in **/
		}	
		
	}else{
		alert("Wrong username"); /** This is what pops up when the username is incorrectly put in **/
			
		}
		

}



