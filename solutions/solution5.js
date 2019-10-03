ul = document.querySelector(".ice-cream-list")
iceCreamFlavors.forEach(function(flavor){
   const childWords = document.createTextNode(flavor)
   const child = document.createElement("li");

   child.appendChild(childWords);
   child.classList.add("ice-cream-flavor");
   ul.appendChild(child);  
})