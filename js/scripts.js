//business logic
function Pizza(size, sauce, meat, nonMeat, address) {
  this.size = size;
  this.sauce = sauce;
  this.meat = [];
  this.nonMeat = [];
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
  $("form.size").submit(function(event) {
    event.preventDefault();

    var size =  $("input:radio[name=size]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    $("input:checkbox[name=meat]:checked").each(function(){
      var meat = $(this).val();
      this.meat.push(meat);
    });
    $("input:checkbox[name=non-meat]:checked").each(function(){
      var nonMeat = $(this).val();
      this.nonMeat.push(nonMeat);
    });
  });
});
