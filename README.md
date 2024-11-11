# simple-html-include
The simplest way to include HTML content client-side.

## Usage

```html
<script src="https://cdn.jsdelivr.net/gh/neilmix/simple-html-macro@1.0/simple-html-macro.js"></script>
<html-include src="my-included-file.html"></html-include>
```

## Limitations

Is not able to insert content into the document head. (This is a limitation of web components.)

Is subject to cross-origin restrictions.
