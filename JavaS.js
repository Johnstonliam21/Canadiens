function login(){
	var user = "Johnston"
	var pass = "Liam"
	var prompt1 = prompt ("Please enter Username");
	var prompt2= prompt ("Please enter password");
	if (prompt1 === user) {
		if(prompt2 === pass){
			alert("Welcome, Johnston")
		}
	}
}