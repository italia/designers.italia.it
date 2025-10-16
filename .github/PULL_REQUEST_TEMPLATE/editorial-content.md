# PR: Aggiunta / Modifica contenuto editoriale

Usa questo template per segnalare l'aggiunta o la modifica di contenuti editoriali (Notizie, Eventi, Media) nel repository.
Compila i campi sotto e verifica la checklist prima di richiedere la review.

## Sommario
- Tipo di contenuto: [Notizie / Eventi / Media]
- File YAML aggiunto / modificato: `src/data/content/community/[tipo]/[YYYYMM-slug].yaml`
- Immagini caricate: `static/images/community/...`
- File sottotitoli/trascrizioni (se presenti): `static/files/community/subtitles/...`
- Data di pubblicazione prevista (YYYY-MM-DD):

## Descrizione
Breve descrizione delle modifiche e del contenuto (2-3 righe):

## Controlli eseguiti (compilare prima di chiedere review)
- [ ] Ho creato/aggiornato il file YAML nel percorso corretto
- [ ] Ho caricato le immagini correlate nel percorso corretto
- [ ] Ho caricato i sottotitoli `.vtt` (per i video) e/o trascrizioni `.odt` se disponibili
- [ ] Ho aperto la PR in draft finché non è pronta per la review

---

## Checklist di review (dal documento di redazione)

### ✅ Validazione tecnica
- [ ] File YAML valido (nessun errore in Vercel)
- [ ] `seo.pathname` indica slug corretto (inizia/termina con `/`, non ha spazi, caratteri speciali o lettere maiuscole, corrisponde al titolo)
- [ ] Nessun errore 404 nei link interni
- [ ] Nessun errore nei test automatici associati alla PR

### ✅ SEO e Metadati
- [ ] `seo.name` ≤ 60 caratteri
- [ ] `seo.description` ≤ 160 caratteri, termina con "."
- [ ] `seo.image` presente e caricata nel percorso corretto, è l'unica con url assoluto `https://designers.italia.it/images/..`

### ✅ Contenuti
- [ ] Titoli e sottotitoli coerenti e senza errori
- [ ] Paragrafi brevi (max 3-4 righe)
- [ ] Heading ordinati semanticamente (H2 → H3)
- [ ] Link parlanti (evitare "clicca qui")
- [ ] Caratteri speciali corretti (es. usare `’` per apostrofo, `È` con accento corretto)
- [ ] Contenuti validati dalla redazione e/o maintainer

### ✅ Accessibilità
- [ ] Su eventuali immagini alt text significativo o `""` se immagine decorativa
- [ ] Trascrizioni per contenuti audio/video laddove possibile
- [ ] Sottotitoli `.vtt` in italiano per audio/video con parlato (obbligatori per i media)
- [ ] Segnalato quando un link apre in nuova finestra (screen reader text / nota)

### ✅ Immagini
- [ ] Peso ≤ 800Kb, dimensioni corrette
- [ ] Nomi file descrittivi e coerenti con il contenuto

---

## Note per i reviewer / mantainer
(Indica qui eventuali punti su cui serve attenzione o check specifici)

- Anteprima Vercel: [inserire link preview se disponibile]
- Eventuali link esterni presenti nella PR che aprono nuove finestre: [elencarli con motivazione]

---

## Checklist finale prima del merge
- [ ] PR marcata come pronta per il merge (non più draft)
- [ ] La redazione ha approvato i contenuti
- [ ] I maintainer hanno verificato build/preview e approvato il deploy

Grazie! :rocket:
