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
    console.log(multiply('999','5'));
}());

(function test_22_mutiply_22(){
	console.log(multiply('22','22'));
}());

function multiply(multA,multB){
	 
		

	resultStringOld = '';
	for(var i = multB.length -1; i >= 0; i--){
		var b = multB[i],
			carry = 0,
			rem = 0,
			resultStringNew = '';
			
		for(var j = multA.length - 1; j >= 0; j--){
			var result = multA[j] * b;
	
			rem = result % 10 + carry;
	
			carry = parseInt(result / 10);
			resultStringNew += int_string(rem);
			
		}
		resultStringNew = resultStringNew += int_string(carry);
		resultStringNew = resultString.split('').reverse().join('');
		if(resultStringOld.length+1 < resultStringNew.length){
			for(var l = 0;l < resultStringNew.length - (resultStringOld.length+1);l++){
				resultStringOld +='0';
			}
		}
		for(var k = resultStringNew.length - 1; k >= 0 ;k-- ){
			resultStringNew[k] + resultStringOld			
		}
	}
	
	return resultString;
	
};

function int_string(a){
	return a + '';
}
