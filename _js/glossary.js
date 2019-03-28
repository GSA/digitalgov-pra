var Glossary = require("glossary-panel");
var terms = require("../_data/terms.json");

var body = document.querySelectorAll(
  ".usa-layout-docs-main_content p, .usa-layout-docs-main_content li"
);

if (body) {
  for (var i = 0; i < body.length; i++) {
    Object.keys(terms).forEach(function(key) {
      body[i].innerHTML = body[i].innerHTML.replace(
        new RegExp("(\\b" + terms[key].term + "\\b)(?![^<]*>|[^<>]*</)", "gi"),
        `<span data-term=${terms[key].term}>${terms[key].term}</span>`
      );
    });
  }
}

function decorator(glossary) {
  var accordion = glossary.accordion;

  accordion.opts.collapseOthers = true;
  accordion.collapse = function(button) {
    var content = document.getElementById(button.getAttribute("aria-controls"));
    if (!content) return;
    button.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    this.setStyles(content);
  };
}

var g = new Glossary(terms);
decorator(g);
