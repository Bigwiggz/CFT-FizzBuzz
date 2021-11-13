//Javascript FizzBuzz

//Event Listener
let runProgramButton=document.getElementById("btnSubmit");
runProgramButton.addEventListener("click", RunFizzBuzz);



//Main Function
function RunFizzBuzz(){
    //Capture input
    let fizzNumber=parseInt(document.getElementById("fizzNumber").value);
    let buzzNumber=parseInt(document.getElementById("buzzNumber").value);

    //Validate number entry
    if(Number.isInteger(fizzNumber)==false || Number.isInteger(buzzNumber)==false){
        errorMessage="One or more of the values provided start value: "+ fizzNumber +" or end value: "+ buzzNumber +" are not numbers";
        let errorMessageDisplay=document.getElmentById("validation-summary");
        errorMessageDisplay.innerHTML=errorMessage;
    }

	//Start and End Values
	let startValue=1;
	let endValue=100;
	
	//Print out Fizz Buzz Table
	let textForTable=PrintOutNumbersToScreen(startValue, endValue,fizzNumber, buzzNumber);

    //Add values to screen
    AddTextResultsToTable(textForTable);
}

//Print out all numbers to screen
function PrintOutNumbersToScreen(startValue, endValue, fizzNumber, buzzNumber){
	
	let completeTableText="";
	let rowCounter=0;
	let fizzBuzzValue="";
	
	//Each Table Row loop
	let insertedRowText="";
	
	//Add each individual value
	for(let i=startValue; i<=endValue;i++){
		
		if(rowCounter===0){
			insertedRowText="<tr>";	
		}
		
		fizzBuzzValue=DefineFizzBuzz(i, fizzNumber, buzzNumber);
		insertedRowText+=`<td class=${fizzBuzzValue}>${fizzBuzzValue}</td>`;
		rowCounter++;
			
		if(rowCounter===5){
			insertedRowText+="</tr>";
			rowCounter=0;
            completeTableText+=insertedRowText;
            insertedRowText="";
		}
	}

    return completeTableText;
}

//Function to determine Fizz or Buzz
function DefineFizzBuzz(number, fizzNumber, buzzNumber){
	let result="";

    if(number%fizzNumber==0 && number%buzzNumber==0){
        result="FizzBuzz";
    }
    else if(number%fizzNumber==0){
        result="Fizz";
    }
    else if(number%buzzNumber==0){
        result="Buzz";
    }
    else{
        result=number;
    }
	return result;
}

//Add Text to Table
function AddTextResultsToTable(inputText){
    let textToTable=document.getElementById("table-body");
    textToTable.innerHTML=inputText;
}