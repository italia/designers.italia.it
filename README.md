# Sorgenti del sito di Designers Italia

[![CircleCI](https://circleci.com/gh/italia/designers.italia.it.svg?style=svg)](https://circleci.com/gh/italia/designers.italia.it)

Questo repository contiene il codice sorgente di [Designers Italia](https://designers.italia.it), **il punto di riferimento per la progettazione dei servizi pubblici digitali**.

Il repository contiene anche alcuni asset (es. file sketch) o i riferimenti agli asset (es. link a un documento docs italia, oppure a un altro repo specifico) dei kit per il design della Pubblica Amministrazione italiana.

Ogni commento o proposta relativa all'evoluzione dei kit può essere fatta utilizzando le [issues](https://github.com/italia/designers.italia.it/issues) di GitHub.

Il sito è sviluppato con [Jekyll](https://jekyllrb.com/) e fa uso dell'ecosistema [Node.js](https://nodejs.org/it/) con [Yarn](https://yarnpkg.com/lang/en/).

Per configurare un ambiente di sviluppo con Docker eseguire i seguenti comandi:

1. Crea l'immagine Docker
   ```console
   docker build . -t designers-italia-it
   ```

1. Esegui l'ambiente di sviluppo
   ```console
   docker run -itp 4000:4000 -v $(pwd):/usr/src/designers.italia.it designers-italia-it
   ```

Se vuoi contribuire e proporre una modifica, è sufficiente aprire una [pull request](https://github.com/italia/designers.italia.it/pulls) su GitHub.

Il sito necessita di essere ricompilato ad ogni pubblicazione su Medium.
