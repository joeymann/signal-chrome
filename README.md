# Signal

> This add-on is very early in development. Before a Chrome web store release can be made, a number of fixes and optimisations need to be made.

<table><tr><td><img src="https://raw.githubusercontent.com/joeymann/signal-chrome/master/images/idle128.png"</img> </td><td>SIGNAL</td></tr></table>

Signal is a browser extension for Chromium-based browsers that displays an icon in the toolbar that changes colour based on the trustworthiness of the website they are viewing.

It reads the URL of the page the user is reading, checks it against four lists, and changes the icon based on which list it shows up in.

## Categories for websites

### Trustworthy

The sites listed in [*trust.txt*](https://github.com/joeymann/signal-chrome/blob/master/trust.txt) are known for high-quality journalism, regardless of their political leanings. Sites in this list will cause Signal to display a green icon.

>Files: trust.txt

### Satirical

The sites listed in [*satire.txt*](https://github.com/joeymann/signal-chrome/blob/master/satire.txt) are organisations that produce humourous news-like content that is not intended to mislead. Sites in this list will cause Signal to display a yellow icon.

>Files: satire.txt

### Salt

The sites listed [*salt.txt*](https://github.com/joeymann/signal-chrome/blob/master/salt.txt) are either news organisations based in countries with known problems with press freedom or have a poorer reputation with handling factual information and thus, extraordinary claims made on these sites should be *[taken with a grain of salt](https://en.wiktionary.org/wiki/with_a_grain_of_salt#English)*. Sites in this list will cause Signal to display a blue icon.

>Files: salt.txt

### False

The sites listed in [*false.txt*](https://github.com/joeymann/signal-chrome/blob/master/false.txt) are sites that maliciously report false information for either political or commercial gain. Sites in this list will cause Signal to display a red icon.

>Files: false.txt, ytFalse.txt

<hr />

### SigURL - Signal URL Search
Signal URL search ([sigurl.py](https://github.com/joeymann/signal-chrome/blob/master/sigurl.py)) is a command line utility to check if a URL is already in a list so that contributors don't have to cmd-f a URL in every single list.

SigURL runs in a Python 3 shell. On running the script, it will print the number of URLs in each list and then requests a URL to search the lists for. It will then return a result that tells the user which list it is in, if any.

It is included in this repository and reads the same lists as the Chrome extension. As it is purely a development tool, it will not be included in official releases of the Chrome extension on the Chrome web store.

<hr />

> Signal uses and includes a copy of [jQuery](https://jquery.com/) which is licensed under an MIT license. It also uses data from [OpenSources](https://github.com/BigMcLargeHuge/opensources), a project to list fake news sites.
