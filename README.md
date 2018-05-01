# webextension

## Introduction

Web extension developed as training proposed by [LIFIA](http://www.lifia.info.unlp.edu.ar) for research project in web increase.

It allows you to find, in [Google Scholar](https://scholar.google.com/), elements related to the longest word found from collecting the text of the `<h1>` elements of the current page. They are arranged in a floating panel and remove it at the end of your search.

## Using the extension

### Clone repository

```bash
$ git clone https://github.com/ulises-jeremias/webextension.git
```

or with SSH

```bash
$ git clone git@github.com:ulises-jeremias/webextension.git
```

Then, the corresponding dependencies are installed using `npm` by executing the
following command in the repository directory,

```bash
$ npm run install
```

or by using `yarn`,

```bash
$ yarn
```

**An example of the commands to execute would be the following,**

```bash
$ git clone https://github.com/ulises-jeremias/webextension.git
$ cd webextension
$ yarn
```

### Load Unpacked Extensions

After performing the steps described above,

#### Google Chrome _(or Chromium)_

-   Go to Google Chrome, Navigate to `Settings –> Extensions`, or open `chrome://extensions`
-   Here Look for the Option `Developer Mode` and **enable** it
-   Once you’ve enabled the Developer Mode option it will modify the extensions
    tab and  it will reveal `Load Unpacked Extension` option.
-   Now simply click on the `Load Unpacked Extension Option`, it will ask you
    for the directory from where the extension is to be loaded.
    -   Here Specify the directory to which we extracted the extension in the
        first step and click on `ok`.
-   That’s it the `webextension` will now be added to Google Chrome.
    Now scroll down in the `Extensions` tab present inside Chrome Settings.
-   Now simply click on the `Launch` option highlighted to launch the extension.

#### Mozilla Firefox _(or Firefox Nightly)_

-   Open `about:debugging`.
-   Click the `Load Temorary Add-on` button.
-   Select any of the files where the `manifest.json` it's located.
