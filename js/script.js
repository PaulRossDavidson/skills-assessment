// 14Four skills assesment "contact list"

	var names = document.getElementById("names");
	var dot = document.getElementById("dot");
	var info = document.getElementById("info");
	var main = document.getElementById("main");
	var details = document.getElementsByClassName("info");
	var mask = document.getElementById("mask");
	var row = document.getElementsByClassName("row");

	state = "email";

	list.forEach(setUp);
	function setUp(list){
		person = document.createElement("div");
		dot = document.createElement("div");
		info = document.createElement("div");
		word = document.createElement("div");
		person.className = "row";
		person.id = list.id;
		person.onclick = function(){showMore(list)};
		if (list.status === "idle"){
			dot.className = "yellow dot";
		} 
		if (list.status === "online"){
			dot.className = "green dot";
		}
		if (list.status === "offline"){
			dot.className = "red dot";
		} else {}
		info.className = "info";
		word.className ="name";
		dot.append(" ");
		word.append(list.name);
		info.append(list.email);
		person.append(dot);
		person.append(word);
		person.append(info);
		main.append(person);
	}
	function showMore(list){
		no = list.id -1;
		address = document.createElement('div');
		phone = document.createElement("div");
		phone.append(list.phone);
		address.append(list.address);
		row[no].append(address);
		row[no].append(phone);
	}

	function printStatus(list) {
		color = document.createElement("div")
		if (list.status === "idle"){
			color.className = "yellow";
		} 
		if (list.status === "online"){
			color.className = "green";
		}
		if (list.status === "offline"){
			color.className = "red";
		} else {}
		color.append(" ");
	}
	function showEmails(){
		if(state === "email"){
			console.log("email already showing.");
		}else{
			state = "email";
			list.forEach(email);
		}
	}
	function email(list){
		no = list.id -1;
		details[no].innerHTML = "";
		details[no].append(list.email);
	}
	function showPhoneNumbers(){
		if (state === "phone"){
			console.log("phone numbers already showing.");
		}else{
			state = "phone";
			list.forEach(phone);
		}
	}
	function phone(list){
		no = list.id -1;
		details[no].innerHTML = "";
		details[no].append(list.phone);
	}
// Dropdown button code
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

