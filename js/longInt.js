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

			for(var k = resultStringOld.length-1;k >=0; k--){
				resultStringOld = resultStringOld.split('');	
				resultStringOld[k] = int_string(parseInt(resultStringNew[k]) + parseInt(resultStringOld[k]));
				resultStringOld = resultStringOld.join('');
			}
		}
	}
	return resultStringOld;
	
};

function int_string(a){
	return a + '';
}
