# Contribution Guidelines

Thank you for your interest to contribute to this project. You're awesome! :+1:

Below here are some guidelines for contributing to this project, please read them before creating a pull request/issue on Github.

Feel free to improve these guidelines with a pull request :)

## Creating the icon

> **Note:** We recommend using Adobe Illustrator for this project. If you do not own Illustrator please make the icon boundaries (white border of the icon) exactly 350 x 350 pt.

If you want to create an icon, please use the [template.ai](https://github.com/marcopixel/r6operators/blob/master/src/template.ai) file which is located in the repository root folder.

The template includes the necessary guides for proper sizing & file layout, which we recommend for you to use since it makes every ones work so much easier :)

**Here's an screenshot of the template loaded into Illustrator CC:**

> ![Illustrator example](https://i.imgur.com/xpZd4Vs.png)

Also follow these guidelines:

- Keep icon boundaries (white border) inside the guides
- Keep all paths/shapes inside the artboard
- Rename the artboard & layer to the `OperatorName`

**Example screenshot of a finished icon:**

> ![Finished example screenshot](https://i.imgur.com/ZKbBPSe.png)

After you're finished with your icon, save the icon under the `icons` folder (filename in lower-case) in the root directory and continue with the steps down below.

> Info: If you're using Illustrator, please save your file with the following settings:
>
> - SVG Profiles: **SVG 1.1**
> - Type: **SVG**
> - Subsetting: **None (Use System Fonts)**
> - Image Location: **Embed**
> - Preserve Illustrator Editing Capabilities **ON**
> - CSS Properties: **Style Attributes**
> - Decimal Places: **3**
> - Encoding: **Unicode (UTF-8)**
> - Output fewer <tspan> elements **ON**
> - Use <textPath> element for Text on Path **ON**
> - Responsive **ON**
> - Include Slicing Data **OFF**
> - Include XMP **OFF**

## Adding the icon to the package

> **Note:** This guide requires a little knowledge about Node.js, PATH and Git, if you feel unsure about this skip this step and just create a pull request with the icon only.

#### Requirements:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Inkscape](https://inkscape.org/) (installed on [PATH](https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them), you can use [chocolatey](https://chocolatey.org/packages/InkScape) to automatically install & add it on Windows)

To setup & install all dependencies for the project, install [Node.js](https://nodejs.org/en/) & [Yarn](https://yarnpkg.com/) and run the following commands in the root directory:

```shell
yarn install
```

Now open your favorite code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/)) and go to the [`operators.json`](https://github.com/marcopixel/r6operators/blob/master/src/operators.json) file located under the `src` folder.

There you will find a huge JSON object containing all metadata for all the operators sorted alphabetically (except the recruits, those are at the bottom). From there you just have to create a new object with the same name as your `icon.svg` and fill out the metadata.

> ![Screenshot of the JSON file](https://i.imgur.com/HBljxs1.png)

If you did everything correctly, you just have to enter `yarn build` into the command line and it should start the build process automatically. This will clean up any old generated files, generate the icons + javascript files and test them for any errors.

Your icons should show up under `lib/icons` in their respective folders and if no errors show up you can go and commit the changes to your pull request.

## Submitting an icon

The best way to contribute an icon is by creating a pull request. They allow for better collaboration and also allow for proper reviews.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Running tests

To run the tests from the command line, simply run the following command:

```shell
yarn test
```

This will start all tests automatically and will tell you exactly where something went wrong.

## Icon requests

Before creating an icon request, please go to issues and search if someone requested the icon already. If there is an open request, please add a ":+1:" to the main post.

If the icon has not already been requested, [create an issue](https://github.com/marcopixel/r6operators/issues/new?title=Icon%20Request:) with a title of `Icon request: <name>` and add as much information as possible (if possible also add images of the icon, so we can start as soon as possible)
