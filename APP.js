document.addEventListener("DOMContentLoaded", function () {
    let liCounter = 1;
    let colorArray = ["turquoise", "peachpuff", "aqua", "orangered", "hotpink", "coral", "green", "blue" ];
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    let newListItemBtn = document.getElementsByClassName("new-list-item-button")[0];
    
    let h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.addEventListener("dblclick", function() {
        setElementColor(h1)
    });

    let h1TextNode = document.createTextNode("This is an h1");
    h1.appendChild(h1TextNode);
    headerContainer.appendChild(h1);

    let h2= document.createElement("h2");
    h2.classList.add("h2");
    h2.addEventListener("dblclick", function() {
        setElementColor(h2)
    });
    let h2TextNode = document.createTextNode("This is an h2");
    h2.appendChild(h2TextNode);
    headerContainer.appendChild(h2);

    let h3= document.createElement("h3");
    h3.classList.add("h3");
    h3.addEventListener("dblclick", function() {
        setElementColor(h3)
    });
    let h3TextNode = document.createTextNode("This is an h3");
    h3.appendChild(h3TextNode);
    headerContainer.appendChild(h3);

    let h4= document.createElement("h4");
    h4.classList.add("h4");
    h4.addEventListener("dblclick", function() {
        setElementColor(4)
    });
    let h4TextNode = document.createTextNode("This is an h4");
    h4.appendChild(h4TextNode);
    headerContainer.appendChild(h4);

    let h5= document.createElement("h5");
    h5.classList.add("h5");
    h5.addEventListener("dblclick", function() {
        setElementColor(h5)
    });
    let h5TextNode = document.createTextNode("This is an h5");
    h5.appendChild(h5TextNode);
    headerContainer.appendChild(h5);

    let h6= document.createElement("h6");
    h6.classList.add("h6");
    h6.addEventListener("dblclick", function() {
        setElementColor(h6)
    });
    let h6TextNode = document.createTextNode("This is an h6");
    h6.appendChild(h6TextNode);
    headerContainer.appendChild(h6);
    
    document.body.appendChild(headerContainer);
    newListItemBtn.addEventListener("click", newListItem);   

    function setElementColor(element) {
        let randomNumber = Math.floor((Math.random() * 7));
        element.style.color = colorArray [randomNumber];
    }
    function newListItem(){
        let newListItem = document.createElement("li");
        newListItem.textContent = `This is List Item ${liCounter}`;
        newListItemBtn.addEventListener("click", function () {
            setElementColor(newListItem);
        });
        newListItem.addEventListener("dblclick", function () {
            removeListItem(newListItem);
        });
        document.body.appendChild(newListItem);
        liCounter ++;
    };
    
    function removeListItem(listItem) {
        listItem.parentNode.removeChild(listItem);
    }
});