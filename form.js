let items = [];
let list = $("#list");
$("form").on("submit", function (event) {
  event.preventDefault();
  let values = $(this).serializeArray();
  items.push(values);
  renderitem(values);
});
function renderitem(values) {
  let card = $("<div>");
  let name = $("<div>");
  let rating = $("<div>");
  name.text(values[0].value);
  rating.text(values[1].value);
  let deleteButton = $("<button>delete</<button>");
  deleteButton.on("click", function () {
    card.remove();
  });
  card.append(name, rating, deleteButton);
  list.append(card);
}
