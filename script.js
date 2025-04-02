 function initialPromise(){
	  return new Promise(resolve =>{
		  setTimeOut(()=>{
				 resolve([1,2,3,4]);
		  
		  },3000)
	  })
 }


initialPromise().
	.then(array =>{
		return  new Promise((resolve)=>{
			setTimeOut(()=>{
				const evenNumber = array.filter(num => num % 2 === 0);
				document.getElementById('output').innerText = JSON.stringify(evenNumbers);
				resolve(evenNumber);
			},1000)
		})
	})
.then(even => {
	return new Promise((resolve)=>{
		setTimeOut(()=>{
			condt multi = even.map(num => num * 2);
			document.getElementById('output').innerText = JSON.stringify(even);
			resolve();
		})
	})
})
	

 


