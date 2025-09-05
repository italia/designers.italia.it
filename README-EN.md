# 🖖 Designers Italia Website Source Code

*[Versione italiana / Italian version](README.md)*

This repository contains the source code for the [Designers Italia](https://designers.italia.it) website, a project that provides knowledge and tools for creating digital services for the Italian Public Administration.

The site hosts the documentation of the Country's design system in the [/design-system/come-iniziare/](https://designers.italia.it/design-system/come-iniziare/) section.

The site uses the latest version of [Bootstrap Italia](https://italia.github.io/bootstrap-italia/), [Gatsby](https://www.gatsbyjs.com) and the [Node.js](https://nodejs.org/) ecosystem.

## 💙 How to Contribute

You can follow and contribute to ongoing work in the [project board](https://github.com/orgs/italia/projects/15).

Comments and proposals regarding the evolution of the site and resources can be made by opening a [new issue](https://github.com/italia/designers.italia.it/issues/new), or by exploring existing [issues](https://github.com/italia/designers.italia.it/issues). If you want to contribute and propose a change, simply open a [pull request](https://github.com/italia/designers.italia.it/pulls).

### 📖 Contribution Guides

Detailed guides are available for project contributors *(Italian language only)*:

- **[HOW-TO-MANAGE-EDITORIAL-CONTENT.MD](HOW-TO-MANAGE-EDITORIAL-CONTENT.MD)** - Guide for creating and managing editorial content (news, events, media)
- **[HOW-TO-DESIGN-SYSTEM-RELEASE.MD](HOW-TO-DESIGN-SYSTEM-RELEASE.MD)** - Procedure for design system releases

### ✏️ Content

The site's content is at [src/data/content/](src/data/content/), and whenever a file is updated the last modification time is automatically generated.

If you want to update one of those files without altering the displayed last modification time, include `(last-update-skip)` somewhere in the commit message.

## 🚀 Quick start

1. **Install dependencies**

```shell
npm i
```

2. **Start developing**

   To start your project up run:

```shell
npm run dev
```

   Your site is now running at [http://localhost:8000](http://localhost:8000)!

3. **Prepare previews of the design system**

   Download and generate examples via the [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) API.

```shell
npm run prepare-content
```

4. **Build static website (production)**

   To build a static version of this website, start the build process.

```shell
npm run build
```

   Your statically generated site is placed inside the public directory.

5. **Validate your work**

   To lint and "prettify" your code.

```shell
npm run lint:fix
```

```shell
npm run prettier:fix
```

6. **Deployment and automated processes (maintainers only)**

   - **Bootstrap Italia updates**: The `bsi-update` action automatically updates Bootstrap Italia and regenerates component previews in Design system pages (daily or manual).

   - **Production deploy**: run sequentially (a) `prepare-deploy` (if new images, <5 min, for SEO card generator) and (b) `deploy` (~30min, site to https://designers.italia.it).

7. **Learn more about Gatsby**

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
