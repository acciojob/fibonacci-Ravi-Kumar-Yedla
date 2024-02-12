function fibonacci(num) {
// your code here
	// if(num<=0){
	// 	return "Invalid";
	// }else if(num === 1){
	// 	return 0;
	// }else if(num === 2){
	// 	return 1;
	// }else{
	// 	let a =0, b =1;
	// 	for(let i=2;i<num;i++){
	// 		let temp = b;
	// 		b = a+b;
	// 		a =temp;
	// 	}
	// 	return b;
	// }
	let a=0;
	let b=1;;
	let c= a+b;
	for(let i=2;i<num.length;i++){
		a=b;
		b=c;
		c= a+b;
	}
	return c;
}

module.exports = fibonacci;
