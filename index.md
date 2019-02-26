---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Glossary
---

<p><span data-term="candidate">Candidate</span> is an example of a term.</p>
<button class="js-glossary-toggle button">Glossary</button>
<div id="glossary" class="glossary" aria-describedby="glossary-result" aria-hidden="true">
  <button title="Close glossary" class="js-glossary-close button button--close toggle">
    <span class="u-visually-hidden">Hide glossary</span>
  </button>
  <h2>Glossary</h2>
  <label for="glossary-search" class="label">Filter glossary terms</label>
  <input id="glossary-search" class="js-glossary-search" type="search" placeholder="e.g. Committee">
  <div class="glossary__content" id="glossary-result">
    <ul class="js-glossary-list"></ul>
  </div>
</div>
