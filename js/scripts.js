//business logic
function Info(pizza, address) {
  this.pizza = pizza;
  this.address = address;
}

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

  $("button#size-submit").click(function() {
    if ($("input").is(':checked')) {
      $(".size").slideUp();
      $(".sauce").slideDown();
    } else {
        alert("Please select a size.")
    };
  });

  $("button#size-edit").click(function() {
    $(".size").slideDown();
    $(".sauce").slideUp();
  });

  $("button#sauce-submit").click(function() {
    if ($("input").is(':checked')) {
      $(".sauce").slideUp();
      $(".topping").slideDown();
    } else {
      alert("Please select a size.")
    };
  });

  $("button#sauce-edit").click(function() {
    $(".sauce").slideDown();
    $(".topping").slideUp();
  });

  $("button#sauce-edit").click(function() {
    $(".size").show();
    $(".sauce").show();
    $("form.pizza").slideDown();
    $("form.address").slideUp();
  });

  $("form.pizza").submit(function(event) {
    event.preventDefault();
    var btn = $(this).find("button#pizza-submit[type=submit]:focus" );

    var size =  $("input:radio[name=size]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var meat = $(this).val();
    var nonMeat = $(this).val();

    if ($("input").is(":not(':checked')")) {
      alert("select the sause and toppings")
    } else {
      var newPizza = new Pizza(size, sauce);
      $("input:checkbox[name=meat]:checked").each(function(){
        newPizza.meates.push(meat);
      });
      $("input:checkbox[name=non-meat]:checked").each(function(){
        newPizza.nonMeates.push(nonMeat);
      });
      $("form.pizza").slideUp();
      $("form.address").slideDown();
    };

    console.log(newPizza)
  });

  $("form.address").submit(function(event) {
    event.preventDefault();
    var btn = $(this).find("button#address-submit[type=submit]:focus");


    var first =  $("input#FirstName").val();
    var last = $("input#LastName").val();
    var street = $("input#StreetAddress").val();
    var city = $("input#city").val();
    var state = $("select#State").val();

    var newAddress= new Address(first, last, street, city, state);

    console.log(newAddress)
  });
});
