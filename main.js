function submit(){
    let userInput=document.getElementsByTagName("input");
    let card_div=document.getElementById("card")
    if(userInput[0].value!==""&&userInput[1].value!==""&&userInput[2].value!==""){
        let parent=document.createElement("div");
        parent.classList.add("cards");
        let nameInput=document.createElement("p");
        nameInput.textContent=userInput[0].value;
        let image=document.createElement("img");
        image.src=userInput[1].value;
        let textarea=document.createElement("p");
        textarea.textContent=userInput[2].value;
        parent.appendChild(nameInput);
        parent.appendChild(image);
        parent.appendChild(textarea);
        card_div.appendChild(parent);
        userInput[0].value="";
        userInput[1].value="";
        userInput[2].value="";
        let addbtn=document.getElementById("add-button");
        let deletebtn=document.getElementById("delete-button");
        addbtn.style.display="block";
        deletebtn.style.display="block";

    }
    else{
        alert("please fill all")
    }

}
