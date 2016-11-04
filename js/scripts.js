//business logic
function Pizza(size, sauce, meat, nonMeat, address) {
  this.size = size;
  this.sauce = sauce;
  this.meates = [];
  this.nonMeates = [];
};

function Address(first, last, street, city, state, zipcode) {
  this.fistName = first;
  this.lastName = last;
  this.fullAddress = [street, city, state, zipcode];
};

Address.prototype.fullName = function() {
  return this.firstName + " " + this.Lastname;
}



$(document).ready(function() {
  $("form.pizza").submit(function(event) {
    event.preventDefault();

    var size =  $("input:radio[name=size]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var newPizza = new Pizza(size, sauce)
    $("input:checkbox[name=meat]:checked").each(function(){
      var meat = $(this).val();
      newPizza.meates.push(meat);
    });
    $("input:checkbox[name=non-meat]:checked").each(function(){
      var nonMeat = $(this).val();
      newPizza.nonMeates.push(nonMeat);
    });

    console.log(newPizza)
  });
});
