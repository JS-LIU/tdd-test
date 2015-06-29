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
	var morningresult = [],
		afternoon = [];
	afternoon = newArr.slice(0);
	var init_con = newArr[0].time;
	
	(function reorder(i,init_time,j){
		
		if( (init_time + newArr[i+j].time) < 180){
			morningresult.push(newArr[i]);
			morningresult.push(newArr[i+j]);
			
			afternoon.splice(i,1);
			afternoon.splice(i+j,1);
			
			init_time = init_time + newArr[i+j].time;
			return reorder(i + j + 1,init_time,j);
		}else if(init_time + newArr[i+j].time == 180){
			afternoon.splice(i+j,1);
			morningresult.push(newArr[i+j]);
			
			return morningresult;
		}else if(init_time + newArr[i+1].time > 180){
			j++;
			return reorder(i + j,init_time,j);
		}
	}(0,init_con,1));	
	
    var afternoonresult = [afternoon[0]];
    var init_afcon = afternoon[0].time; 
	
	(function reorderaf(i,init_time,j){
		var nowtime = init_time + afternoon[i+j].time;
		if(nowtime < 240){
			afternoonresult.push(afternoon[i+j]);
			init_time = init_time + afternoon[i+j].time;
			return reorderaf(i + j + 1,init_time,j);
		}else if(nowtime == 240){
			afternoonresult.push(afternoon[i+j]);
			console.log(1);
			return afternoonresult;
		}else if(nowtime > 240){
			console.log(nowtime);
			j++;
			console.log(afternoonresult);
			return reorderaf(i + j,init_time,j);
		}
	}(0,init_afcon,1));	
	console.log(afternoonresult);
	return morningresult;
}
