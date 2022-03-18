const toggle = document.getElementById('toggle-menu');
const toggleButton = document.getElementById('toggle-navbar')
const exitButton = document.getElementById('exit-menu')
const footer = document.getElementById('footer');
toggle.style.display = "none";

toggleButton.addEventListener('click', () => {
	toggle.style.display = 'block';
	footer.style.display = "none";
})
exitButton.addEventListener('click', () => {
	footer.style.display = "block";
	toggle.style.display = 'none';
})