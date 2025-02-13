# 🖖 Sorgente del sito Designers Italia

Questo repository contiene il codice sorgente del sito **[Designers Italia](https://designers.italia.it)**, il progetto che mette a disposizione conoscenza e strumenti per creare i servizi digitali della Pubblica Amministrazione.

Il sito ospita la documentazione del design system del Paese nella sezione [/design-system/come-iniziare/](https://designers.italia.it/design-system/come-iniziare/).

Il sito utilizza l'ultima versione di [Bootstrap Italia](https://italia.github.io/bootstrap-italia/), [Gatsby](https://www.gatsbyjs.com) e l'ecosistema [Node.js](https://nodejs.org/it/).

## 💙 Come contribuire

È possibile seguire e contribuire alle lavorazioni in corso nella [board di progetto](https://github.com/orgs/italia/projects/15).

Commenti e proposte relative all'evoluzione del sito e delle risorse può essere fatta aprendo una [nuova issue](https://github.com/italia/designers.italia.it/issues/new), o esplorando le [issues](https://github.com/italia/designers.italia.it/issues) esistenti. Se vuoi contribuire e proporre una modifica, è sufficiente aprire una [pull request](https://github.com/italia/designers.italia.it/pulls).

### ✏️ Content

The site's content is at [src/data/content/](src/data/content/), and whenever a
file is updated the last modification time is automatically generated.

If you want to update one of those files without altering the displayed last
modification time, include `(last-update-skip)` somewhere in the commit message.

## 🚀 Quick start

1.  **Install dependencies.**

    ```shell
    npm i
    ```
2.  **Start developing**

    To start your project up run.

    ```shell
    npm run dev
    ```

    Your site is now running at [http://localhost:8000](http://localhost:8000)!

3.  **Prepare previews of the design system**

    Download and generate examples via the [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) API.

    ```shell
    npm run prepare-content
    ```

4.  **Build static website (production)**

    To build a static version of this website, start the build process.

    ```shell
    npm run build
    ```

    Your statically generated site is placed inside the `public` directory.

5.  **Validate your work**

    To lint and "prettify" your code.

    ```shell
    npm run lint:fix
    ```
    ```shell
    npm run prettier:fix
    ```

6.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
