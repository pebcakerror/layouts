# Setup

- Install SASS Ruby Gem
- Install browser-sync node package

*Todo: Move to either node-sass or at least dart sass now that ruby version is deprecated*

- set up your editor to pickup the code helper files:
  `.editorconfig`
  `.eslintrc`
  `.stylelintrc`

# Development

1. Create a new git branch.
2. Create a new html file in /layouts
  `/layouts/foobar.html`
3. Create a new .scss file with the same name in /scss/layouts
  `/scss/layouts/foobar.scss`
4. In a terminal window run `browser-sync start --config bs-config.js` to spin up the local dev server
5. In a separate terminal window run `sass --watch scss/layouts/foobar.scss:css/layouts/foobar.css`
  You are building the sass to css with a 1:1 relationship.
6. Submit a pull request for each layout.



# Boilerplate

## /layouts/foobar.html
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Foobar</title>

  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700%7cSource+Serif+Pro:400,600" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="https://samaritanministries.org/stylesheets/application.css">

	<link rel="stylesheet" type="text/css" href="/css/main.css">
	<link rel="stylesheet" type="text/css" href="/css/layouts/foobar.css">
</head>

<body>
	<div class="content">

		<section class="foobar">
			<p class="foobar__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</section>

	</div>
</body>
</html>
```

## /scss/layouts/foobar.scss

```
$breakpoints: (
  'xs-phone': 320px,
  'phone': 480px,
  'tablet': 768px,
  'desktop': 1024px,
  'widescreen': 1200px
);

// keywords
$media-expressions: (
  'screen': 'screen',
  'print': 'print',
  'handheld': 'handheld',
  'landscape': '(orientation: landscape)',
  'portrait': '(orientation: portrait)',
  'retina2x': '(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)',
  'retina3x': '(-webkit-min-device-pixel-ratio: 2.5), (min-resolution: 240dpi)'
);

@import '../vendors/include-media';
@import '../base/mixins';
@import '../base/variables';
@import '../base/helpers';


.foobar {
  padding: 32px;
  background-color: $gray-background;

  @include media('>=tablet') {
    padding: 54px;
  }

  @include media('>=desktop') {
    padding: 72px 0;
  }
}

.foobar__description {
  font-size: 26px;
  font-weight: 400;
  color: $purple;
  text-align: center;
}
```
