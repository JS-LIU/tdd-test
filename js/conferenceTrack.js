/**
 * @author 刘殿麒
 */


var conference = [
	{name:'A',time:60},
	{name:'B',time:45},
	{name:'C',time:30},
	{name:'D',time:45},
	{name:'E',time:45},
	{name:'F',time:5},
	{name:'G',time:60},
	{name:'H',time:45},
	{name:'I',time:30},
	{name:'G',time:30},
	{name:'K',time:45},
	{name:'L',time:60},
	{name:'M',time:60},
	{name:'N',time:45},
	{name:'O',time:30},
	{name:'P',time:30},
	{name:'Q',time:60},
	{name:'R',time:30},
	{name:'S',time:30}];


(function morningPlan(){
	console.log(conferencePlan(conference));
}());


function conferencePlan(arr){
	//	排序		
	var newArr = arr.sort(function(a,b){
		return a.time - b.time;
	});
	
	newArr = newArr.reverse();
	console.log(newArr);
	var result = [];
	var init_con = newArr[0].time;
	
	(function reorder(i,init_time){
		
		if( init_time + newArr[i+1].time < 180){
			result.push(newArr[i]);
			result.push(newArr[i+1]);
			init_time = init_time + newArr[i+1].time;
			return reorder(i + 2,init_time);
		}else if(init_time + newArr[i+1].time == 180){
			result.push(newArr[i+1]);
			return result;
		}
	}(0,init_con));	
	
	return result;
}
