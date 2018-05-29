---
title: How to contribute to our documentation pages
summary: Quick introduction to help anyone improve Platform OS documentation.
permalink: /contributing
---

## Permalinks

### Structure

Documentation is separated into following sections:

* _Getting started_ - step by step description of setting up a marketplace
* _Guides_ - list of common use patterns
* _Reference_ - list of all APIs, drops, GraphQL properties etc

Based on this structure we create permalinks using folder structure, where each nested level is another folder, e.g

```text
Reference > Liquid Drops > User => /reference/liquid-drops/user
Guides > Split Registration => /guides/split-registration
```

### Top level file

Make sure that every folder contains an`index.html` file, which should be either:

* standalone document describing the concept, e.g. what API structure we use, what are custom filters in liquid, etc., or
* Table of Contents for this section, but that will require either maintaining links by hand or writing custom handler for navigation, or
* the first link in the navigation structure e.g. `Meta > Contributing => meta/index.html`

### Format

* Use only lower case letters
* Use hyphen `-` as the separator for words
* Do not add `.html` suffix, it's not necessary

## Page settings

Every page can have meta data set via [YAML Front Matter](https://jekyllrb.com/docs/frontmatter/).

* `title` - HTML title, good title is crucial for improving findability
* `summary` - This is used in search engines to provide a description of the search result. Make sure it’s short and to the point - _it needs to fit below 70 characters_
* `permalink` - Permalink that will be used to display this page

### Example

```liquid
title:     Get access to our platform
summary:   Get access to our platform description
permalink: /getting-started/create-marketplace
---
## Here goes the actual page content

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fugiat ipsam dolorum dolorem quo, harum doloribus tempora iure minima officia atque quasi quisquam, ad nisi aliquam quod, unde error nihil.
```

## Code examples

Code examples are probably the most important part of the documentation - the more there are the better. There is a built-in code highlighter that works for many different programming languages. To add a code sample, use <code>```</code> block ,followed by the syntax highlighter language you want to use:

<pre class="highlight">
```javascript
&lt;h1&gt;Code.ruby = 'awesome'&lt;/h1&gt;
&lt;script&gt;
document.write('attack');
&lt;/script&gt;
```</pre>

which will result in

```javascript
<h1>Code.ruby = 'awesome'</h1>
<script>
document.write('attack');
</script>
```

To add liquid markup examples, wrap the whole block in <code>{{ "{% raw "}}%}</code> tag like so

<pre class="highlight">
{{ "{% raw "}}%}
```liquid
{% if value != blank %}
  Show my {{ "{{ value "}}}}
{% endif %}
```
{{ "{% endraw "}}%}</pre>

## Tables

Tables are easy to create in markdown. Use tables if you are describing tabular data.

### Table example

<pre class="highlight">
{% raw %}
| Unit          | Shortcut                       |
|---            |---                             |
| Mile          | `mi` or `miles`                |
| Meter         | `m` or `meters`                |
| Yard          | `yd` or `yards`                |
{% endraw %}
</pre>

If you have trouble remembering the syntax, don't worry, just use [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) to speed things up.

## Screenshots

Please use screenshots whenever appropriate.

Bad examples

* Code
* Example server response
* Form configuration view
* Table with parameters description

Good examples

* Visualization of the flow/process
* Visualization of explain with words concept
* Result of browser rendering if helpful

## Headings

Headings are very important part of decreasing time that is needed for reader to find interesting information. [Please use them](https://m.eliteediting.com.au/what-are-headings-and-why-are-they-important/).

Please do not use `#` (h1) heading in your articles, as those should be reserved for the title of the article.

We encourage using `##` (h2) headings to separate important sections of the article. Because they are automatically anchored and it is possible to copy url directly to their position on the page.

Use `###` (h3) at your discretion to increase readability and scanability of your content.

## Links

Use links to avoid duplication of content - you can describe a term once (for example in [reference](/reference)) and leverage its existence in many places.
