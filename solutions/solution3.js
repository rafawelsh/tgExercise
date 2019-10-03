$.each(iceCreamFlavors, function(i, v) {
    $("ul").append($(`<li>${v}</li>`).addClass("ice-cream-flavor"))
});