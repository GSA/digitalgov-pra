var Fuse = require("fuse.js");
var contacts = require("../_data/contacts.json");

var contactSearch = document.querySelector("#contacts-search");
var contactResults = document.querySelector("#contacts-results");

var contactsApproved = contacts.filter(function(contact) {
  return contact.approved;
});
var options = {
  keys: ["agency", "short", "office"]
};
var fuse = new Fuse(contactsApproved, options);

if (contactSearch) {
  contactSearch.addEventListener("input", function(evt) {
    var results = fuse.search(this.value);

    this.value
      ? contactResults.classList.remove("display-none")
      : contactResults.classList.add("display-none");

    if (results.length) {
      var markup = results.map(function(r) {
        return `<h3 class="border-bottom">${
          r.agency
        }  (${r.short})</h3><h4>${r.office}</h4>
        <div><span class="text-bold">Phone:</span> ${r.phone}</div>
        <div><span class="text-bold">Email:</span> <a href="mailto:${
          r.email
        }">${r.email}</a></div>
        <div><span class="text-bold">Website:</span> <a href="${
          r.website
        }">Visit website</a></div>`;
      });

      contactResults.innerHTML = markup;
      return;
    }

    contactResults.innerHTML =
      '<span class="text-italic">No results found</span>';
  });
}
