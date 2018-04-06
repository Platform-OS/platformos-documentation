---
title: Translations
permalink: /reference/translations/
---

Translations are used for three main purposes.

1.  Multi-language marketplace
    This is the most obvious use case - if you want to manually translate your website and provide static copy in more than one language, you can create a `yml` file which maps translation key to value for each language, and then use `t` filter in liquid to render proper value, based on current user's Locale.
2.  Date Format
    Another use of translation is to come up with common format of a date, and then use `l` (lower L) filter to render date and time in the same way across platform. This is useful to be able to easily change the way date/time is displayed everywhere, or to customize per marketplace basis.
3.  Flash messages
    Finally, the last usage is to define system messages returned by our api
