# select2-bootstrap4-theme

[![npm version](https://img.shields.io/npm/v/@ttskch/select2-bootstrap4-theme.svg?style=flat-square)](https://www.npmjs.com/package/@ttskch/select2-bootstrap4-theme)
[![npm downloads](https://img.shields.io/npm/dm/@ttskch/select2-bootstrap4-theme.svg?style=flat-square)](https://www.npmjs.com/package/@ttskch/select2-bootstrap4-theme)
[![](https://data.jsdelivr.com/v1/package/npm/@ttskch/select2-bootstrap4-theme/badge)](https://www.jsdelivr.com/package/npm/@ttskch/select2-bootstrap4-theme)

[Select2](https://github.com/select2/select2) v4 theme for Bootstrap4 (Compatible to boostrap 4.0.0+)

## Live demo

👉 https://ttskch.github.io/select2-bootstrap4-theme/

## Installation

```bash
$ npm install @ttskch/select2-bootstrap4-theme
```

## Usage

```html
<link rel="stylesheet" href="/path/to/select2.css">
<link rel="stylesheet" href="/path/to/select2-bootstrap4.css">
```

```js
$('select').select2({
    theme: 'bootstrap4',
});
```

## Getting involved

1. Fix [src/layout.scss](src/layout.scss), [src/_single.scss](src/_single.scss) or [src/_multiple.scss](src/_multiple.scss)
1. Do `npm run build:both`
1. Send me a Pull Requeest

You can use [docs](docs) dir for your development.

1. Do `npm run prepare` (this creates symlink to `dist/select2-bootstrap4.css` onto `docs`)
1. Serve `docs` with your local web server (e.g. `php -S localhost:8888 -t docs`)
1. Do `npm watch`
1. Tweak scss and browse demo page on your browser
