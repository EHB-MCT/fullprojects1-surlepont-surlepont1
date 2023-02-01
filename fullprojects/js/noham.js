let clicks = 0;
document.getElementById("showImage").addEventListener("click", function () {
	clicks++;
	if (clicks === 3) {
		document.getElementById("test").style.display = "block";
	}
});
