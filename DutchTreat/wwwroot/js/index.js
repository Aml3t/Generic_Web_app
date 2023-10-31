var x = 0;
var s = "";

alert("Hello User");

var theForm = document.getElementById("theForm");
theForm.hidden = true;

var buyButton = document.getElementById("buyButton");
buyButton.addEventListener("click", function () {
    console.alert("Buying Item");
})

var productInfo = document.getElementsByClassName("product-props");
var listItems = productInfo.item[0].children;
