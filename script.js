
document.getElementById("convertButton").onclick = function(){
	let kgInput = document.getElementById("kgInput").value;
	let pound = (kgInput * 2.20).toFixed(2);
	document.getElementById("kgOut").innerHTML = "Pound : " + pound;
	document.getElementById("comment1").style.visibility = "visible";
	if(isNaN(check)){
		document.getElementById("comment2").innerHTML = "Wrong Type";
		document.getElementById("box1height").style.background = "rgba(255, 0, 0, 0.5)";
	}
	else{
		document.getElementById("box1weight").style.background = "rgba(255, 255, 255, 0.25);";
	}
	if(kgInput > 100){
		document.getElementById("comment1").innerHTML = "Heavy";
	}
	else if(kgInput <100 & kgInput> 50){
		document.getElementById("comment1").innerHTML = "Medium";
	}
	else{
		document.getElementById("comment1").innerHTML = "Light";
	}
	let check = Number(kgInput);

}
document.getElementById("convertButton2").onclick= function(){
	let heightInput = document.getElementById("heightInput").value;
	let feet = (heightInput * 3.28).toFixed(2);
	document.getElementById("heightOut").innerHTML = "Feet : " + feet;
	document.getElementById("comment2").style.visibility = "visible";
	if(isNaN(check)){
		document.getElementById("comment2").innerHTML = "Wrong Type";
		document.getElementById("box1height").style.background = "rgba(255, 0, 0, 0.5)";
	}
	else{
		document.getElementById("box1height").style.background = "rgba(255, 255, 255, 0.25);";
	}
	if(heightInput > 100){
		document.getElementById("comment2").innerHTML = "Long";
	}
	else if(heightInput <100 & heightInput> 50){
		document.getElementById("comment2").innerHTML = "Medium";
	}
	else{
		document.getElementById("comment2").innerHTML = "Short";
	}
	let check = Number(heightInput);


}
document.getElementById("convertButton3").onclick= function(){
	let tempInput = document.getElementById("tempInput").value;
	let fahrenheit = ((tempInput * (9/5)) + 32).toFixed(2);
	document.getElementById("tempOut").innerHTML = "Fahrenheit : " + fahrenheit;
	document.getElementById("comment3").style.visibility = "visible";
	if(isNaN(check)){
		document.getElementById("comment3").innerHTML = "Wrong Type";
		document.getElementById("box1temp").style.background = "rgba(255, 0, 0, 0.5)";
	}
	else{
		document.getElementById("box1temp").style.background = "rgba(255, 255, 255, 0.25);";
	}
	if(tempInput > 100){
		document.getElementById("comment3").innerHTML = "Hot";
	}
	else if(tempInput <100 & tempInput> 50){
		document.getElementById("comment3").innerHTML = "Warm";
	}
	else{
		document.getElementById("comment3").innerHTML = "Cold";
	}
	let check = Number(tempInput);

	
	

}
