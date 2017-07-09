---
title: How to contribute to our documentation pages
summary: Quick introduction to help anyone improve Marketplace Platform documentation.
permalink: /contributing
---

## Permalinks

### Structure
Documentation is separated into following sections:

* *Getting started* - step by step description of setting up a marketplace
* *Guides* - list of common use patterns
* *Reference* - list of all APIs, drops, graphql properties etc
* *Contribute* - how to contribute to the documentation

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
* `summary` - This is used in search engines to provide a description of the search result. Make sure it’s short and to the point - *it needs to fit below 70 characters*
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

## Screenshots

## Headings



