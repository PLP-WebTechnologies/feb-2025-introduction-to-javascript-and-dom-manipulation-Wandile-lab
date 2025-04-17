const changeText = () => {
    document.getElementById("firstText").textContent = "You have changed the text content!"
};

const modifyCss = () => {
    document.querySelectorAll(".myList").forEach(list =>{
        list.style.color = "yellow";
    });
    document.querySelectorAll(".heading").forEach(h =>{
        h.style.color = "green";
    });
    
};

const toggleElement = () => {
    const popup = document.querySelector(".popup");
   
    if (popup) {
        popup.remove();
    } else{
        const newElement = document.createElement("h1");
        newElement.classList.add("popup");
        newElement.textContent = "YOU'RE A STAR";
        newElement.style.color = "red"
        document.body.append(newElement);


    }
};

document.getElementById("button1").addEventListener('click', changeText);
document.getElementById("button2").addEventListener('click', modifyCss);
document.getElementById("button3").addEventListener('click', toggleElement);
