iceCreamFlavors.map(function(flavor) {
    $("ul").append($(`<li>${flavor}</li>`).addClass("ice-cream-flavor"))
})