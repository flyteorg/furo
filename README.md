<h1 align="center">Furo</h1>
<p align="center">
  A clean customisable <a href="https://www.sphinx-doc.org/">Sphinx</a> documentation theme.
</p>
<a href="https://pradyunsg.me/furo/">
  <img align="center" src="https://github.com/pradyunsg/furo/raw/main/docs/_static/demo.png" alt="Demo image">
</a>

## Elevator pitch

<!-- start elevator-pitch -->

- **Intentionally minimal** --- the most important thing is the content, not the scaffolding around it.
- **Responsive** --- adapting perfectly to the available screen space, to work on all sorts of devices.
- **Customisable** --- change the color palette, font families, logo and more!
- **Easy to navigate** --- with carefully-designed sidebar navigation and inter-page links.
- **Good looking content** --- through clear typography and well-stylised elements.
- **Good looking search** --- helps readers find what they want quickly.
- **Biased for smaller docsets** --- intended for smaller documentation sets, where presenting the entire hierarchy in the sidebar is not overwhelming.

<!-- end elevator-pitch -->

## Quickstart

<!-- start quickstart -->

Furo is distributed on [PyPI]. To use the theme in your Sphinx project:

1. Install Furo in documentation's build environment.

   ```text
   pip install furo
   ```

2. Update the `html_theme` in `conf.py`.

   ```py
   html_theme = "furo"
   ```

3. Your Sphinx documentation's HTML pages will now be generated with this theme! 🎉

[pypi]: https://pypi.org/project/furo/

<!-- end quickstart -->

For more information, visit [Furo's documentation][quickstart-docs].

[quickstart-docs]: https://pradyunsg.me/furo/quickstart

## Contributing

Furo is a volunteer maintained open source project, and we welcome contributions of all forms. Please take a look at our [Contributing Guide](https://pradyunsg.me/furo/contributing/) for more information.

If CSS changes are introduced in `flyte.css`, run ``gulp build`` to compile CSS and JS.

## Acknowledgements

Furo is inspired by (and borrows elements from) some excellent technical documentation themes:

- [mkdocs-material] for MkDocs
- [Just the Docs] for Jekyll
- [GitBook]
- [pdoc3]

We use [BrowserStack] to test on real devices and browsers. Shoutout to them for supporting OSS projects!

[mkdocs-material]: https://squidfunk.github.io/mkdocs-material/
[just the docs]: https://pmarsceill.github.io/just-the-docs/
[gitbook]: https://www.gitbook.com/
[pdoc3]: https://pdoc3.github.io/pdoc/doc
[browserstack]: https://browserstack.com/

## What's with the name?

I plucked this from the scientific name for [Domesticated Ferrets](https://en.wikipedia.org/wiki/Ferret): Mustela putorius **furo**.

A ferret is actually a really good spirit animal for this project: cute, small, steals little things from various places, and hisses at you when you try to make it do things it doesn't like.

> I plan on commissioning a logo for this project (or making one myself) consisting of a cute ferret. Please reach out if you're interested!

## Used By

<!-- start used-by -->

> I'm being told that mentioning who uses `$thing` is a good way to promote `$thing`.

- [urllib3] -- THE first adopter of Furo
- [attrs] -- one of the early adopters!
- [pip] -- what I wrote this for
- [Python Developer’s Guide][devguide]
- [psycopg3] -- another of the early adopters!
- [black]

[urllib3]: https://urllib3.readthedocs.io/
[attrs]: https://www.attrs.org/
[devguide]: https://devguide.python.org/
[pip]: https://pip.pypa.io/
[psycopg3]: https://www.psycopg.org/psycopg3/docs/
[black]: https://black.readthedocs.io/en/stable/

<!-- end used-by -->

## License

This project is licensed under the MIT License.


## Flyte Customizations

This fork of `furo` adds some flyte-specific customizations. For example, the
css styles are slightly different from the upstream repo, the `navbar.html`
file has custom elements, and the `main.js` file has custom logic to pull
together all the different Flyte documentation sites.

### Setup

We recommend using `conda` to isolate your enviroment from your system's `node`
installation. [Install miniconda](https://docs.conda.io/en/latest/miniconda.html)
depending on your system, then create a virtual environment:

```
conda create -n flyte-furo python=3.9
conda activate flyte-furo
conda install -c conda-forge nox nodejs==15.14.0
```

You may have to create a new shell session to make sure the correct node
executable is being used. You should expect it to point to the path of your
conda environment, for example:

```
$ which node
/path/to/miniconda3/envs/flyte-furo/bin/node
```

Then install npm dependencies with `npm install`.

### Building the Docs Locally

To build the docs locally, do:

```
$ nox -s docs-live
```

### Updating the `furo` package

Since we don't have a proper deployment system for our fork of furo, we always
install furo in the flyte docs using:

```
pip install git+https://github.com/flyteorg/furo@main
```

Therefore, we need to check in all the compiled code that's typically not
checked into git. So if you make changes to any of the `css` or `js` files in
the `src` directory, you need to compile the project and check it in.

The `nox -s docs-live` command above should generate all the files needed, so after
a successful build you can add the changes and commit it as usual.
