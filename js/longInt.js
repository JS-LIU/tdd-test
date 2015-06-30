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
	console.log(multiply('23','21'));
}());

function multiply(multA,multB){
	 
		

	resultStringOld = '';
	resultt = '';
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
		
		if(int_string(carry)!=0){
			resultStringNew = (resultStringNew += int_string(carry));
		}
		if(multB.length > 1){
			var resultStringOld = resultStringNew;
		}
		if(i > 0){
			
			
		}				
	}
	
	return resultt;
	
};

function int_string(a){
	return a + '';
}
