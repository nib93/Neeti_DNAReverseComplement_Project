
function getSequence (str) {
	if(isEmptyOrSpaces(str))
	{
		alert("Error!!! You can't submit the empty input. Please provide the valid input");
	}
	else if(!validate(str))
		alert("Error!!! DNAString should contains only a,c,g,t,A,C,G,t alphabets.\n A or a=adenine, C/c=cytosine, G/g=guanine, T/t=thymine.");
	else
	{
		var reversed=str.split('').reverse().join("");
	
	var comp=getComplement(reversed);
	document.getElementsByName('display')[0].value= comp;
	//document.writeln(comp);
	
	
	}
	
    
}
function getComplement(dna){
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G",
	"a": "t",
    "t": "a",
    "g": "c",
    "c": "g"
  }
  return dna.replace(/A|T|G|C/ig, function(matched){
    return sequence[matched];
  });
}
	
function validate(dna){
	var name = dna;
	 return /^[aAcCtTgG]+$/.test(dna);	
		
	}
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

    