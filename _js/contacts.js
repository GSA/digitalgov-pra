var autocomplete = require("autocompleter");
var contacts = require("../_data/contacts.json");

var input = document.getElementById("contacts-search");
var results = document.getElementById("contacts-results");

autocomplete({
  input: input,
  minLength: 1,
  emptyMsg: "No results found",
  fetch: function(text, update) {
    text = text.toLowerCase();
    var suggestions = contacts.filter(n => {
      if (n.label.toLowerCase().includes(text)) {
        return true;
      }
      if (n.short && n.short.toLowerCase().includes(text)) {
        return true;
      }
      if (n.office && n.office.toLowerCase().includes(text)) {
        return true;
      }
    });
    update(suggestions);
  },
  onSelect: function(item) {
    results.classList.remove("display-none");
    input.value = item.label;
    results.innerHTML = JSON.stringify(item);
  }
});

function clearfield() {
  input.value = "";
  results.classList.add("display-none");
  results.innerHTML = "";
}

input.addEventListener("focus", clearfield);
