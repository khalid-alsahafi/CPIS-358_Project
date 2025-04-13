let password = document.getElementById('password');
let passwordStrength;
let passwordStrengthDisplay = document.getElementById('password_strength');
let strength;
password.addEventListener('input', () => {
	passwordStrength = zxcvbn(password.value);
	switch (passwordStrength.score) {
		case 0:
			strength = 'very weak';
			break;
		case 1:
			strength = 'weak';
			break;
		case 2:
			strength = 'medium';
			break;
		case 3:
			strength = 'strong';
			break;
		case 4:
			strength = 'very strong';
			break;
	}
	passwordStrengthDisplay.innerHTML = 'Strength: ' + strength;
	document.getElementById("time_to_crack").innerHTML = "Time to crack: " + passwordStrength.crack_times_display.offline_slow_hashing_1e4_per_second;
});
