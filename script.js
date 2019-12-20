// let button= document.querySelector('button');
// button.addEventListener('click', function(){
    
// });

let button= document.querySelector('button');
let textArea=document.querySelector('#password');

button.addEventListener('click',function(){
  let pswdLength= prompt("Enter the length of your password between 8 and 128 charcters");
  let charType=prompt("Enter a character type");

 let textInput="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
 let textOut="";
 //let numeric="0123456789"
 
 let len=parseInt(pswdLength);

if(pswdLength==null){
  alert("Must enter length");
}
 if (len<8 || len>128){
   alert("Please enter a password with length between 8 and 128");
 }

 if (charType==null){
   alert("Invalid char type! Please enter a valid char");
 }
 if (len>=8 && len<=128 && charType!=null){
    textOut=textOut+charType;
    for (let i=0;i<(len)-1; i++){
      textOut+=textInput.charAt(Math.floor(Math.random() * textInput.length));
    }
    alert("Password is Acceptable!!!")
    textArea.textContent=textOut;
 }


});