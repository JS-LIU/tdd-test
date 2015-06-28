/**
 * @author 刘殿麒
 */


(function print_M(){
    console.log(store_str('M'));
}());

(function print_anystr(){
    console.log(store_str('MDCLXVI'));
    
}());

(function only_add(){
    console.log(calculate('MDCLXVI'));
}());

(function D_M(){
	console.log(calculate('DM'));
}());

(function D_M_I_V_L_X(){
	
	console.log(calculate('DMIVLX'));
}());

(function X_L_I_I(){
	
	console.log(calculate('XLII'));
}());


function calculate(str){
	var numArr = store_str(str);
	
	var num_1 = numArr[0],
		result = 0;
		numArr_add = [];
		
	(function cal_meth(i){
		if(i < numArr.length){
			
			if(numArr[i] < numArr[i+1]){				//	数组后面一个值是否大于前面的值
				var new_nun = numArr[i+1] - numArr[i];	//	如果大于则用后面一个值减去前面的数组值
				numArr_add.push(new_nun);
				return 	cal_meth(i+2);	
			}else{
				numArr_add.push(numArr[i]);
				return 	cal_meth(i+1);	
			}
		}else{
			return numArr_add;
		}
		
	}(0));
	for(var i = 0 ,len = numArr_add.length; i < len;i++){
		result += numArr_add[i];
		
	}
	return result;
}


function store_str(str){
    var numArr = [];
    
    for(var i = 0,len = str.length;i < len; i++){
        numArr.push(str_to_num(str[i]));    
    }
        
    return numArr;
    
}


function str_to_num(str){
    switch (str){
        case 'M':
        return 1000;
        case 'D':
        return 500; 
        case 'C':
        return 100;
        case 'L':
        return 50;
        case 'X':
        return 10;
        case 'V':
        return 5;
        case 'I':
        return 1;       
    }
}