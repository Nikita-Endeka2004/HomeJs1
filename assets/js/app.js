

function calcMath(){

    let number = +numberInput.value;
    let tax;


    number = number - 12950;

		if(number>0 && number<=10275) {
			tax = ((number*10)/100);
		}
		else if(number>10275 && number<=41775) {
			val = eval(number-10275);
			tax = eval((10275/10) + ((val*12)/100));
		}
		else if(number>41775 && number<=89075) {
			val = eval(number-41775);
			tax = eval(3780 + ((val*22)/100));
		}
		else if(number>89075 && number<=170050) {
			val = eval(number-89075);
			tax = eval((99605/10) + ((val*24)/100));
		}
		else if(number>170050 && number<=215950) {
			val = eval(number-170050);
			tax = eval(14668 + ((val*32)/100));
		}
		else if(number>215950 && number <= 539900)
		{
			val = eval(number-215950);
			tax = eval((1133825/10) + ((val*35)/100));
		}

        else if(number>539900)
		{
			val = eval(number-539900);
			tax = eval(188965 + ((val*37)/100));
		}

        indexInput.innerHTML = (`$ ${tax}`);

}

