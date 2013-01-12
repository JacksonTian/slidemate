Slidemate
=========

Convert markdown text into an awesome [reveal.js](http://lab.hakim.se/reveal-js) slideshow!

## Installation

`sudo npm install slidemate -g`

## Usage

Simply pass a markdown file to slidemate as follows to
create your slideshow:

`slidemate -f README.en.md`

Your slides will then be available as `./slides/index.html`.

If you like, you can specify a different output directory
for your slides using the -o flag:

`slidemate -f README.md -o ~`

To view the slides you just generated, just open
`index.html` in your browser.

## License

The MIT license. Enjoy!
