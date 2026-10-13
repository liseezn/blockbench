# Pixcape Studio

Pixcape Studio is a Minecraft skin and cape editing-focused derivative of [Blockbench](https://github.com/JannisX11/blockbench). It keeps Blockbench's established editing engine and Minecraft skin-model support, with Pixcape branding and a skin-first startup experience.

## Web deployment

- Local development: `npm ci` then `npm run serve`
- Production build: `npm ci` then `npm run build-web`
- Docker: `docker build -t pixcape-studio .`, then run the container on port `8080`
- Zeabur: deploy this repository using the Dockerfile; the included Nginx configuration listens on port `8080`

The CI workflow runs the web build and checks that `dist/bundle.js` is generated. The original Blockbench engine and its Minecraft skin tools remain the foundation; Pixcape-specific UI changes are maintained on the `pixcape/skin-cape-editor` branch.

## Upstream and license

Pixcape Studio is based on Blockbench by JannisX11 and contributors. The upstream source is available at https://github.com/JannisX11/blockbench. Blockbench is licensed under **GPL-3.0-or-later**; this derivative retains the upstream license and notices. See [LICENSE.MD](LICENSE.MD) for the license terms.

---

Blockbench is a free and open source model editor for low-poly models with pixel art textures.
Models can be exported into standardized formats, to be shared, rendered, 3D-printed, or used in game engines. There are also multiple dedicated formats for Minecraft Java and Bedrock Edition with format-specific features. 

Blockbench features a modern and beginner friendly interface, but also offers lots of customization and advanced features for experienced 3D artists. Plugins can extend the functionality of the program even further.

Website and download: [blockbench.net](https://www.blockbench.net)


![Interface](https://web.blockbench.net/content/front_page_app.png)



## Contribution

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.MD)

Check out the [Contribution Guidelines](CONTRIBUTING.md).



## Launching Blockbench

To launch Blockbench from source, you can clone the repository, navigate to the correct branch and launch the program in development mode using the instructions below.
If you just want to use the latest version, please download the app from the website.

### Setup Repository
* Install [NodeJS](https://nodejs.org/en/).
* Then install all dependencies via
`npm install`


### Run in Electron
Use this command or press Ctrl + Shift + B to launch Blockbench in Electron:

`npm run dev`

To enable debugging in VS Code, switch to the **Run & Debug** tab, select the **"Debug Renderer"** configuration, and press the green arrow button to launch.
Now you can set breakpoints and debug inside VSCode.


### Run the web app
Use this command to launch the web app locally:

`npm run serve`

Now you can open the web app in your browser under http://localhost:3000


## Plugins

Blockbench supports Javascript-based plugins. Learn more about creating plugins on [https://www.blockbench.net/wiki/docs/plugin](https://www.blockbench.net/wiki/docs/plugin).



## License

* The Blockbench source-code is licensed under the GPL license version 3. See `LICENSE.MD`.
* Modifications to the source code can be made under the terms of that license.
* Blockbench plugins (external scripts) and themes (theme files to customize the design) that interact with the Blockbench API are an exception. Plugins and themes can be created and/or published as open source, proprietary or paid software.
* All assets created with Blockbench (models, textures, animations, screenshots etc.) are your own!
