# PR: Release Design system .italia

Usa questo template per aprire PR di rilascio della documentazione del Design system Italia.
Compila i campi sotto e verifica tutte le checklist prima del merge.

---

## Sommario
- Versione da rilasciare: v*X.Y.Z* (MAJOR.MINOR.PATCH)
- Tipo di rilascio: [MAJOR / MINOR / PATCH]
- Branch di rilascio (es. `release-v1-X-Y`):
- File modificati principali:
  - `src/data/content/dsnav.yaml`
  - `src/data/content/design-system/fondamenti/versionamento.yaml`
- Link alle PR collegate (risorse esterne / aggiornamenti):
- Data di rilascio prevista (DD mese YYYY):

## Descrizione del rilascio
Breve descrizione dei cambiamenti (2-3 righe):

---

## Checklist di controllo (da eseguire prima del merge)

### Pre-rilascio
- [ ] Versioni risorse esterne verificate
- [ ] Tipo di rilascio definito (MAJOR/MINOR/PATCH)
- [ ] Commit URL principali raccolti

### File
- [ ] `dsnav.yaml`: versione aggiornata in `tag.label`
- [ ] `versionamento.yaml`: tabella versioni aggiornata
- [ ] `versionamento.yaml`: changelog aggiunto in cima
- [ ] Link commit, schede e changelog verificati funzionanti

### PR
- [ ] Titolo PR conforme al formato 
- [ ] Descrizione PR contiene la to-do list con issue correlate e promemoria controllo data/changelog
- [ ] Anteprima Vercel verificata (controlla `/design-system/fondamenti/versionamento/` e la sidebar)
- [ ] Issue correlate linkate e risolte prima del merge
- [ ] Squash & merge con nel titolo commit il link alla PR

### Deploy
- [ ] Lancio azione "Deploy" (manuale) dopo approvazione
- [ ] Verifiche post-deploy eseguite

---

## Troubleshooting & note
- Formato data: usare "DD mese YYYY" (es. "25 luglio 2025").
- Assicurati che il changelog sia in cima alla lista (ordine decrescente per versione).
- Se le anteprime componenti non mostrano aggiornamenti, verifica la PR di aggiornamento Bootstrap Italia o l'azione automatica "Content and dependencies update".
- In caso di problemi in preview Vercel: correggi e riapri PR hotfix, poi rilancia il deploy.

---

## Coordinamento risorse esterne
- Controlla i changelog dei seguenti repository prima del rilascio:
  - Bootstrap Italia: https://github.com/italia/bootstrap-italia/releases
  - UI Kit Italia: https://github.com/italia/design-ui-kit/releases
  - Design Tokens Italia: https://github.com/italia/design-tokens-italia/releases

---

Grazie! 🇮🇹
