---
title: Rendering Page as PDF
permalink: /getting-started/pages/pdf
---

Pages can be rendered in PDF format. First, you will need to define a page with pdf format:

```yml
---
slug: expert/validation/summary_pdf
format: pdf
layout_name: pdf
name: Expert Validation Summary
---
```

And then define the PDF layout in liquid_views/layouts/pdf.liquid

```html
<html>
...

<style>
# inline styles here
</style>
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" bgcolor="#eef4f8">
    <main>
      <div class="container">
        <div class="row">

          {{ content_for_layout }}
        </div>
      </div>
    </main>
  </body>
</html>
```

**Note** Underneath it uses the wicked_pdf gem, and there are some [caveats](https://github.com/mileszs/wicked_pdf#usage-conditions---important) asset/image helpers don't work that well - if you want to test it locally use it with `USE_FOG=1` configured.
