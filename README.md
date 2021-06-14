# select2-bootstrap4-theme

[![npm version](https://img.shields.io/npm/v/@ttskch/select2-bootstrap4-theme.svg?style=flat-square)](https://www.npmjs.com/package/@ttskch/select2-bootstrap4-theme)
[![npm](https://img.shields.io/npm/dm/@ttskch/select2-bootstrap4-theme?label=npm&style=flat-square)](https://www.npmjs.com/package/@ttskch/select2-bootstrap4-theme)
[![](https://data.jsdelivr.com/v1/package/npm/@ttskch/select2-bootstrap4-theme/badge)](https://www.jsdelivr.com/package/npm/@ttskch/select2-bootstrap4-theme)
[![Packagist Version](https://img.shields.io/packagist/v/ttskch/select2-bootstrap4-theme?style=flat-square)](https://packagist.org/packages/ttskch/select2-bootstrap4-theme)
[![Packagist Downloads](https://img.shields.io/packagist/dm/ttskch/select2-bootstrap4-theme?label=packagist&style=flat-square)](https://packagist.org/packages/ttskch/select2-bootstrap4-theme)

[Select2](https://github.com/select2/select2) v4 theme for Bootstrap4 (Compatible to boostrap 4.0.0+)

## Live demo

👉 https://ttskch.github.io/select2-bootstrap4-theme/

## Installation

### CDN

```html
<link rel="stylesheet" href="/path/to/select2.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@x.x.x/dist/select2-bootstrap4.min.css">
```

### Manually

```bash
# npm
$ npm install @ttskch/select2-bootstrap4-theme

# yarn
$ yarn add @ttskch/select2-bootstrap4-theme

# composer
$ composer require ttskch/select2-bootstrap4-theme
```

```html
<link rel="stylesheet" href="/path/to/select2.css">
<link rel="stylesheet" href="/path/to/select2-bootstrap4.min.css">
```

## Usage

```js
$('select').select2({
  theme: 'bootstrap4',
  width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style'
});
```

## Getting involved

1. Edit SCSS files in the [src folder](src)
1. Run `npm run build:both`
1. Send a Pull Request

You can use [docs](docs) dir for your development.

1. Run `npm run prepare` (this creates symlink to `dist/select2-bootstrap4.css` onto `docs`)
1. Serve `docs` from your local web server, examples:
    - Using PHP: `php -S localhost:8888 -t docs`
    - Using Python 3: `python3 -m http.server -d docs 8888`
1. Run `npm run watch`
1. Tweak SCSS and browse demo page on your browser
