/**
 * @author 刘殿麒
 */
(function test_2_multiply_3(){
    console.log(multiply('2','3'));
}());

(function test_3_multiply_4(){
    console.log(multiply('3','4'));
}());

(function test_3_multiply_12(){
    console.log(multiply('3','2313'));
}());


function multiply(multA,multB){
    var numA = multA[multA.length - 1],
        numB,
        result = '';

    for(var i = (multB.length - 1); i >= 0; i--){
        numB = multB[i];
        var result_num = numA * numB; 
        //  进位
        var carry_bit = parseInt(result_num / 10) +'';
        // 余数
        var remainder = result_num % 10 +'';

        result += remainder;
    }
    if(carry_bit != 0){
        result =  remainder + carry_bit;
    }
    
    result = result.split('').reverse().join('');
    
    return  result;   
};

