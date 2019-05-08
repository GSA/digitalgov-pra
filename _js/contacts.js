var accessibleAutocomplete = require("accessible-autocomplete");
var contacts = require("../_data/contacts.json");

var container = document.querySelector("#contacts-search-container");
var results = document.querySelector("#contacts-results");

function clearInput(input) {
  input.value = "";
  results.classList.add("display-none");
  results.innerHTML = "";
}

function suggestions(query, populateResults) {
  query = query.toLowerCase();
  const suggestions = contacts.filter(n => {
    if (
      n.agency.toLowerCase().includes(query) ||
      (n.short && n.short.toLowerCase().includes(query))
    ) {
      return true;
    }
    return false;
  });
  suggestions.sort((a, b) => (a.agency > b.agency ? 1 : -1));
  populateResults(suggestions);
}

if (container) {
  accessibleAutocomplete({
    element: container,
    id: "contacts-search",
    source: suggestions,
    autoselect: true,
    confirmOnBlur: false,
    onConfirm: result => {
      results.classList.remove("display-none");
      results.innerHTML = `
        <div class="bg-base-lightest padding-2 border-bottom border-base">
          <h4 class="margin-y-0 font-serif-sm">${result.agency}</h4>
        </div>
        <div class="padding-2">
          ${
            result.office
              ? `<p>PRA requests are handled by the ${result.office}.</p>`
              : ""
          }
          <p>Here is how you can contact this office:</p>
          <ul class="add-list-reset">
          ${
            result.website
              ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Online:</h5><span><a href="${
                  result.website
                }" class="usa-link--external">Visit website</a></span></li>`
              : ""
          }
          ${
            result.internal
              ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Online:</h5><span><a href="${
                  result.internal
                }" class="usa-link--external">Visit website (internal)</a></span></li>`
              : ""
          }
          ${
            result.phone
              ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Phone:</h5><span>${
                  result.phone
                }</span></li>`
              : ""
          }
          ${
            result.email
              ? `<li class="margin-bottom-2"><h5 class="margin-y-0 font-sans-xs">Email:</h5><span><a href="mailto:${
                  result.email
                }">${result.email}</a></span></li>`
              : ""
          }
          </ul>
        </div>
      `;
    },
    templates: {
      inputValue: result => {
        return (
          result &&
          `${result.agency} ${result.short ? `(${result.short})` : ""}`
        );
      },
      suggestion: result => {
        return (
          result &&
          `${result.agency} ${result.short ? `(${result.short})` : ""}`
        );
      }
    },
    tNoResults: () => {
      return `We don't have a listing for this agency yet. Often, the Office of the Chief Information Officer can point you in the right direction.`
    }
  });

  container.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "INPUT") {
      clearInput(e.target);
    }
  });
}
