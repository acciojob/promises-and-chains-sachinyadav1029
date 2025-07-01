//your JS code here. If required.
let age =  document.getElementById("age");
let name =  document.getElementById("name");
let btn = document.getElementById("btn");


btn.addEventListener("click" , (e)=>{

	e.preventDefault()
	const myPromise = new Promise((resolve , reject)=>{

		 const val = Number(age.value.trim());
        const n = name.value.trim();

		setTimeout(()=>{
			
			if(val >= 18){
			resolve(`Welcome, ${n}. You can vote`);
		   }else{
				reject(`Oh sorry ${n}. You aren't old enough`)
		  }

				myPromise.then((message)=>{
			alert(message)
		}).catch((errormsg)=>{
			alert(errormsg)
		})

		 	
		},4000)

	
		
	})
})