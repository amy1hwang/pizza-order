//business logic
function Pizza(name, size, sauce, meat, nonMeat, address) {
  this.pizzaName = name
  this.size = parseInt(size);
  this.sauce = sauce;
  this.meats = [];
  this.nonMeats = [];
};

Pizza.prototype.cost = function() {
  return this.size + (3 * parseInt(this.meats.length)) + (2 * parseInt(this.nonMeats.length))
}

function Address(first, last, street, city, state, zipcode) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
};

Address.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + ", " + this.zipcode;
}



$(document).ready(function() {

  myPizzas = [];



  //move on sauce
  $("h4#size-submit").click(function() {
    if ($('[name="size"]').is(':checked')) {
      $(".size").slideUp();
      $(".sauce").slideDown();
    } else {
      alert("Select a size.")
    }
  });

  //go back to size
  $("h4#size-edit").click(function() {
    $(".sauce").slideUp();
    $(".size").slideDown();
  });

  //move on to topping
  $("h4#sauce-submit").click(function() {
    if ($('[name="sauce"]').is(':checked')) {
      $(".sauce").slideUp();
      $(".topping").slideDown();
    } else {
      alert("Select a sauce.")
    }
  });

  //go back to sauce
  $("h4#sauce-edit").click(function() {
    $(".topping").slideUp();
    $(".sauce").slideDown();
  });

  //move on to pizza naming
  $("h4#topping-submit").click(function() {
    $(".topping").slideUp();
    $(".pizza-name").slideDown();
  });

  //go back to topping
  $("h4#topping-edit").click(function() {
    $(".pizza-name").slideUp();
    $(".topping").slideDown();
  });

  //done with pizza, move on to address
  $("h4#pizza-edit").click(function() {
    $(".size").show();
    $("form.address").slideUp();
    $("form.pizza").slideDown();
  });

  //when pizza submit button is clicked
  $("form.pizza").submit(function(event) {
    event.preventDefault();
    var btn = $(this).find("button#pizza-submit[type=submit]:focus" );

    var size =  $("input:radio[name=size]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var name = $("input#pname").val();

    //setting vars for pizza object properties
    var newPizza = new Pizza(name, size, sauce);


    $("input:checkbox[name=meat]:checked").each(function(){
      var meat = $(this).val();
      newPizza.meats.push(meat);
    });

    $("input:checkbox[name=non-meat]:checked").each(function(){
      var nonMeat = $(this).val();
      newPizza.nonMeats.push(nonMeat);
    });

    if (name === "") {
      alert("You did not name the pizza.")
    } else {
      //pizza done, move one to confirmation
      $("form.pizza").slideUp();
      //output pizza names
      $("ul#pizza-list").append("<li><span class='pizza-names'>" + newPizza.pizzaName + "</span></li>");

      //change the size values from number to strings
      var sizeName = function() {
        if (size === "7") {
          return "Small"
        } else if (size === "10") {
          return "Medium"
        } else if (size === "13") {
          return "large"
        }
      }

      $("h4#add").click(function() {
        $("input:radio[name=size]").prop("checked", '');
        $("input:radio[name=sauce]").prop("checked", '');
        $('.meat-toppings input:checked').prop('checked', '');
        $('.non-meat-toppings input:checked').prop('checked', '');
        $("#pname").val("");
        $("form.pizza").show();
        $(".pizza-name").hide();
        $(".size").slideDown();
        $(".confirmation").slideUp();
        $(".meat-confirm").text("");
        $(".non-meat-confirm").text("");
      });


      var meatList = "";
      for(var i = 0; i < newPizza.meats.length; i++) {
        meatList += "<li>" + newPizza.meats[i] + "</li>"
      }

      var nonMeatList = "";
      for(var i = 0; i < newPizza.nonMeats.length; i++) {
        nonMeatList += "<li>" + newPizza.nonMeats[i] + "</li>";
      }

      myPizzas.push(newPizza);

      $(".pizza-detail").show();
      $(".pizza-names").last().click(function() {
        $(".size-confirm").text(sizeName);
        $(".sauce-confirm").text(newPizza.sauce);
        $(".meat-confirm").html(meatList);
        $(".non-meat-confirm").html(nonMeatList);
        $(".cost-confirm").text(newPizza.cost());
        $(".confirmation").show();
      });

      $("h4#confirmation-submit").click(function() {
        $("form.pizza").slideUp();
        $(".pizza-detail").slideUp();
        $(".confirmation").slideUp();
        $("form.address").slideDown();
      });
    };

  });


  $("form.address").submit(function(event) {
    event.preventDefault();
    var btn = $(this).find("button#address-submit[type=submit]:focus");

    var first =  $("input#FirstName").val();
    var last = $("input#LastName").val();
    var street = $("input#StreetAddress").val();
    var city = $("input#City").val();
    var state = $("select#State").val();
    var zipcode = $("input#ZipCode").val();

    //setting vars for address object properties
    var newAddress = new Address(first, last, street, city, state, zipcode);

    var totalCost = 0
    console.log('Stored Pizzas', myPizzas);

    var totalCost = 0
    for(var i = 0; i < myPizzas.length; i++) {
      var myPizza = myPizzas[i];
      totalCost += myPizza.cost();
    };
    console.log(totalCost);


    $("form.address").slideUp();
    $(".check-out").slideDown();
    $(".name-check-out").text(newAddress.fullName());
    $(".address-check-out").text(newAddress.fullAddress());
    $(".cost-check-out").text(totalCost);

  });
});

//style
