/**
 * @author 刘殿麒
 */


(function print_M(){
    console.log(calculate('M'));
}());

(function print_anystr(){
    console.log(calculate('MDCLXVI'));
    
}());

(function only_add(){
    console.log(calculate('MDCLXVI'));
});





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