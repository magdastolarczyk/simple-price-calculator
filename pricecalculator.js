
function calculatePrice() {
  var bill_amount = parseFloat(document.getElementById("bill_amount").value);
    var service_qual = parseFloat(document.getElementById("service_qual").value);
    var numOfPeople = parseInt(document.getElementById("people_amount").value);

  if (bill_amount === "" || service_qual == 0) {
    alert("Please enter values");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  console.log(typeof bill_amount);
  var total = (bill_amount + (bill_amount * service_qual)) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

  document.getElementById("totalPrice").style.display = "block";
  document.getElementById("price").innerHTML = total;

}


document.getElementById("totalPrice").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculatePrice();

};
