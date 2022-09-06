

function calcMath(){

    let number = +numberInput.value;
    let tax = [1027.5, 3780, 10406, 19434, 14668, 113382.5];
	let sum = 0;

    number = number - 12950;

	if(number>0 && number<=10275) {

		for(let i = 0; ; i++){

			sum = tax[i];

		}
		
	}
	else if(number>10275 && number<=41775) {

		number = ((number - 10275) * 12)/100;

		tax.splice(1, 1, number);

		for(let i = 0; i <= 1; i++){

			sum = sum + tax[i];

		}
		
	}
	else if(number>41775 && number<=89075) {

		number = ((number - 41775) * 22)/100;

		tax.splice(2, 1, number);

		for(let i = 0; i <= 2; i++){

			sum = sum + tax[i];

			console.log(tax);

		}

		console.log(sum);

	}
	else if(number>89075 && number<=170050) {

		number = ((number - 89075) * 24)/100;

		tax.splice(3, 1, number);

		for(let i = 0; i <= 3; i++){

			sum = sum + tax[i];

			console.log(tax);

		}

		console.log(sum);

	}
	else if(number>170050 && number<=215950) {

		number = ((number - 170050) * 32)/100;

		tax.splice(4, 1, number);

		for(let i = 0; i <= 4; i++){

			sum = sum + tax[i];

		}

	}
	else if(number>215950 && number <= 539900)
	{

		number = ((number - 215950) * 35)/100;

		tax.splice(5, 1, number);

		for(let i = 0; i <= 5; i++){

			sum = sum + tax[i];

		}

	}

	else if(number>539900)
	{

		number = ((number - 539900) * 37)/100;

		tax.splice(6, 0, number);

		for(let i = 0; i <= 6; i++){

			sum = sum + tax[i];

		}

	}

	indexInput.innerHTML = `$ ${sum}`;

}

