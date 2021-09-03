var output;
var count;
var currname;
var selectedName;


startGame();

function startGame(){
	output="";
	count=0;
	currname="";
	selectedName="";
	unshuffled=[`<img src='https://picsum.photos/seed/{11}picsum/100/100' alt="" data-ns-test='img1' class='image'>`,
				`<img src='https://picsum.photos/seed/{12}picsum/100/100' alt="" data-ns-test='img2' class='image'>`,
				`<img src='https://picsum.photos/seed/{13}picsum/100/100' alt="" data-ns-test='img3' class='image'>`,
				`<img src='https://picsum.photos/seed/{14}picsum/100/100' alt="" data-ns-test='img4' class='image'>`,
				`<img src='https://picsum.photos/seed/{15}picsum/100/100' alt="" data-ns-test='img5' class='image'>`];

	var random=unshuffled[Math.floor(Math.random() * unshuffled.length)];
	console.log(random);
	unshuffled.push(random);

	shuffled=unshuffled.map((a)=>({sort:Math.random(),value:a}))
	.sort((a,b)=>a.sort - b.sort)
	.map((a)=>(a.value));

	console.log(shuffled);

	let el=document.getElementById("images");

	for(var i=0;i<shuffled.length;i++){
		output=output+shuffled[i];
	}

	el.innerHTML=output;
	console.log(output);



	clickImages();



}



function verify(){
	if(currname==selectedName){
		document.getElementById("para").innerHTML="you are human !! congragulations";
	}else{
		document.getElementById("para").innerHTML="you are not human !! sorry";
	}
	document.getElementById("btn").style.display="none";
	//document.getElementById("para").innerHTML="";
}


function gameReset(){
	startGame();
	document.getElementById("reset").style.display="none";
	console.log(count);
	document.getElementById("para").innerHTML="";
}


function clickImages(){
	document.querySelectorAll(".image").forEach((item)=>{
		item.addEventListener("click",(event)=>{
			count++;
			console.log(count);
			document.getElementById("reset").style.display="inline";
			if(count==2){
				document.getElementById("btn").style.display="inline";
			}else if(count>2){
				document.getElementById("btn").style.display="none";
				return;
			}

			currname=item.getAttribute("data-ns-test");

			if(count==1){
				item.setAttribute('data-clicked',"true");
				selectedName=currname;
			}else if(item.getAttribute("data-clicked")==true){
				selectedName="";
				document.getElementById("btn").style.display="none";
				count--;
			}
		})
	})
}