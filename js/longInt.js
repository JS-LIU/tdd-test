/**
 * @author 刘殿麒
 */
(function test_2_multiply_3(){
    console.log(multiply('2','3'));
}());
(function test_4_multiply_5(){
    console.log(multiply('4','5'));
}());
(function test_47_multiply_5(){
    console.log(multiply('16','8'));
}());

(function test_23_mutiply_21(){
	console.log(multiply('23','21'));
}());

(function test_16_mutiply_18(){
	console.log(multiply('16','18'));
}());
(function test_33_mutiply_33(){
	console.log(multiply('33','33'));
}());

function multiply(multA,multB){
	 
		

	var resultStringOld = '',
		cover = '';
	for(var i = multB.length -1; i >= 0; i--){
		var b = multB[i],
			carry = 0,
			rem = 0,
			resultStringNew = '';
			
			
		for(var j = multA.length - 1; j >= 0; j--){
			var result = multA[j] * b;
	
			rem = result % 10 + carry;
	
			carry = parseInt(result / 10);
			var string_rem = int_string(rem);
			
			string_rem = string_rem.split('').reverse().join('');
			resultStringNew += string_rem;
		}
		
		if(int_string(carry)!=0){
			resultStringNew = (resultStringNew += int_string(carry));
		}
		resultStringNew = resultStringNew.split('').reverse().join('');
		
		if(i == multB.length -1){
			resultStringOld = resultStringNew;
		}else{
			
			cover = cover +'0';			
			resultStringNew = resultStringNew + cover;
			if(resultStringNew.length > resultStringOld.length){
				resultStringOld = '0' + resultStringOld;
			}
			var add_rem = 0,
				add_carry = 0,
				resultt = '';
				
			for(var k = resultStringOld.length-1;k >=0; k--){
				
				var a = parseInt(resultStringNew[k]) + parseInt(resultStringOld[k]) + add_carry;
				
				add_rem = a % 10;
				add_carry = parseInt(a / 10);
				resultt += add_rem ;
				// resultt = resultt.split('').reverse().join('');
				// resultStringOld = resultStringOld.split('');	
				// resultStringOld[k] = int_string(parseInt(resultStringNew[k]) + parseInt(resultStringOld[k]));
				// resultStringOld = resultStringOld.join('');
				// resultt = carry + resultt;
				// resultStringOld = resultt;
			}
			console.log(add_carry);
			if(add_carry!=0){
				resultt += int_string(add_carry);
			}
			
			resultStringOld = resultt.split('').reverse().join('');
		}
	}
	return resultStringOld;
	
};

function int_string(a){
	return a + '';
}
