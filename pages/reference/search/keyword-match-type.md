---
title: Keyword match type
permalink: /reference/search/keyword-match-type
---

Search by default tries to match keyword exactly with words in field. When you search for `alan` it will match values `alan` but also `Mike Alan` and `Mike Alan and Tommy`. You can also define keyword to match words that starts or ends with given phrase.

For example you want to search users that name name starting with `Al`

## Match type
```graphql
query search_people {
  people(
    query: {
      keyword: "Al"
      match_type: ENDS_WITH
    }
  ) {
    results {
      name
    }
  }
}
```

Returns users that have `name` starting with `Al*` ex. `Alex`, `Alan`, `Alice`.

## Wildcards
Keyword also accepts the wildcards, `?` for single character, `*` for more. For example:

- `al*r*` will match `alexander`, `alexandra` but not `alex`
- `al?n` will match `alan`, `alen` but not `aleen`
