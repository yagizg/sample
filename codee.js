var location1 = "Kuki";

var guess;
var isFound = false;


while (!isFound) {
	guess = window.prompt("Cicinin gizli aşkı kimdir ? (lütfen baş harfini büyük girin..)");
		if (guess == location1) {
				document.write("eveeet tabi ki Kukiii");
				isFound = true;
			}
	
}
