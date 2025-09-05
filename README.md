# 🖖 Sorgente del sito Designers Italia

*[English version / Versione inglese](README-EN.md)*

Questo repository contiene il codice sorgente del sito **[Designers Italia](https://designers.italia.it)**, il progetto che mette a disposizione conoscenza e strumenti per creare i servizi digitali della Pubblica Amministrazione.

Il sito ospita la documentazione del design system del Paese nella sezione [/design-system/come-iniziare/](https://designers.italia.it/design-system/come-iniziare/).

Il sito utilizza l'ultima versione di [Bootstrap Italia](https://italia.github.io/bootstrap-italia/), [Gatsby](https://www.gatsbyjs.com) e l'ecosistema [Node.js](https://nodejs.org/it/).

## 💙 Come contribuire

È possibile seguire e contribuire alle lavorazioni in corso nella [board di progetto](https://github.com/orgs/italia/projects/15).

Commenti e proposte relative all'evoluzione del sito e delle risorse possono essere fatti aprendo una [nuova issue](https://github.com/italia/designers.italia.it/issues/new), o esplorando le [issue](https://github.com/italia/designers.italia.it/issues) esistenti. Se vuoi contribuire e proporre una modifica, è sufficiente aprire una [pull request](https://github.com/italia/designers.italia.it/pulls).

### 📖 Guide per i collaboratori

Per i collaboratori del progetto sono disponibili guide dettagliate:

- **[HOW-TO-MANAGE-EDITORIAL-CONTENT.md](https://github.com/italia/designers.italia.it/blob/main/HOW-TO-MANAGE-EDITORIAL-CONTENT.md)** - Guida per la creazione e gestione dei contenuti editoriali (notizie, eventi, media) e del controllo delle card in evidenza nelle diverse sezioni del sito.
- **[HOW-TO-DESIGN-SYSTEM-RELEASE.md](https://github.com/italia/designers.italia.it/blob/main/HOW-TO-RELEASE-DESIGN-SYSTEM.md)** - Procedura per i rilasci del Design system del Paese.

### ✏️ Contenuti

Il contenuto del sito si trova in [src/data/content/](src/data/content/), e ogni volta che un file viene aggiornato, l'ora dell'ultima modifica viene generata automaticamente.

Se vuoi aggiornare uno di questi file senza alterare l'orario dell'ultima modifica visualizzato, includi `(last-update-skip)` nel messaggio del commit.

## 🚀 Avvio rapido

1. **Installa le dipendenze**

```shell
npm i
```

2. **Inizia lo sviluppo**

   Per avviare il progetto esegui:

```shell
npm run dev
```

   Il sito ora è disponibile su [http://localhost:8000](http://localhost:8000)!

3. **Prepara le anteprime del design system**

   Scarica e genera gli esempi tramite l'API di [Bootstrap Italia](https://italia.github.io/bootstrap-italia/).

```shell
npm run prepare-content
```

4. **Costruisci il sito statico (produzione)**

   Per costruire una versione statica del sito, avvia il processo di build.

```shell
npm run build
```

   Il sito generato staticamente viene posizionato nella directory `public`.

5. **Valida il tuo lavoro**

   Per il linting e "prettify" del codice:

```shell
npm run lint:fix
```

```shell
npm run prettier:fix
```

6. **Deployment e processi automatici (solo maintainer)**  

   - **Aggiornamento Bootstrap Italia**: L'azione `bsi-update` aggiorna automaticamente Bootstrap Italia e rigenera le anteprime dei componenti nelle schede del Design system (giornaliera o manuale).

   - **Deploy produzione**: lanciare in sequenza (a) `prepare-deploy` (se ci sono nuove immagini, meno di 5 min, per generatore card SEO) e (b) `deploy` (5-30min, usa cache Gatsby, sito su https://designers.italia.it).

7. **Ulteriori informazioni su Gatsby (in Inglese)**

- [Documentazione](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Tutorial](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Guide](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Riferimenti API](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Libreria Plugin](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
