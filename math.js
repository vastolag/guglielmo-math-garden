
var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion()
{
	const n1 = Math.floor(Math.random() * 5);
	document.getElementById('n1').innerHTML = n1;
	const n2 = Math.floor(Math.random() * 6);	// note `6` to get a value between 0 and 5
	document.getElementById('n2').innerHTML = n2;

	answer = n1 + n2;
}

function checkAnswer()
{
	const prediction = predictImage();
	console.log(`answer ${answer} prediction ${prediction}`);	

	if (prediction == answer)
	{
		score++;
		console.log(`right, ${score}`);

		if (score <= 6)
		{
			backgroundImages.push(`url('images/background${score}.svg')`);
		}
		else
		{
			alert('Well done! Your math garden is in full bloom, we will start again');
			score = 0;
			backgroundImages = [];
		}
		// either cases above, we need to render here
		document.body.style.backgroundImage = backgroundImages;
	}
	else
	{
		if (score != 0) { score--; }
		console.log(`wrong ${score}`);
		alert('Opps! Check your calculation');
		setTimeout(function () {
			backgroundImages.pop();
			document.body.style.backgroundImage = backgroundImages;
		}, 1000);
	}

}
