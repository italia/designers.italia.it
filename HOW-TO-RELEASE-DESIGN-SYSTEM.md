# Guida rilasci Design system .italia

## Introduzione

Procedura per rilasciare nuove versioni della documentazione del [Design system .italia](https://designers.italia.it/design-system/) ([changelog](https://designers.italia.it/design-system/fondamenti/versionamento/#changelog-documentazione)).

Il rilascio coordina la **documentazione** del design system ospitata nel sito Designers Italia (`designers.italia.it/design-system/`) con le **risorse dell'ecosistema** (Bootstrap Italia, UI Kit Italia, Design Tokens Italia) tramite PR dedicate.

---

## File da aggiornare

| File | Cosa modificare |
|------|----------------|
| `src/data/dsnav.yaml` | Versione nel tag della sidebar (`tag.label`) |
| `src/data/design-system/fondamenti/versionamento.yaml` | Versioni tabella + nuovo changelog |

---

## Processo di Rilascio

### 1. Pre-rilascio
- Definisci tipo rilascio (MAJOR.MINOR.PATCH): due criteri possibili
  - **Segue cambiamento più significativo** delle risorse incluse (Bootstrap Italia, UI Kit Italia, Design Tokens)
  - **Dedicato alle schede** di documentazione modificate/aggiunte (o a funzionalità del sito che impattano su queste schede)
- Raccogli url dei commit specifici (dal ramo `main`) delle modifiche principali
- Verifica nuove versioni risorse esterne: coordinamento nei team ma rilasci non sincroni

### 2. Branch e modifiche
**Branch**: `release/v1-X-Y`

**Aggiorna `dsnav.yaml`**:
```yaml
tag:
  label: "v1.X.Y"  # ← Nuova versione
```

**Aggiorna `versionamento.yaml`**:
- Tabella versioni: aggiorna `label` delle risorse rilasciate
- Changelog: aggiungi nuova voce in cima al campo `text` del componente `TextImageCta`

### 3. PR e rilascio
- **Commit**: `chore(release): design system .italia v1.X.Y 🚀 🇮🇹`
- **PR title**: stesso formato del commit
- **Review**: team maintainer Designers Italia
- **Deploy**: `prepare-deploy` + `deploy` (manuale) - c'è tempo per review anteprima prima del rilascio

---

## Template Changelog

```markdown
### v1.X.Y
DD mese YYYY
- **[Sezione](/design-system/sezione/)**
  - Nuova scheda: [Titolo](/link/)
  - Aggiornati contenuti schede: [Titolo](/link/), [Titolo](/link/)
  - Corretta proprietà `campo` in scheda [Titolo](/link/) ([commit link])
- Risorse
  - Aggiornato **Bootstrap Italia** alla versione X.Y.Z ([Changelog Bootstrap Italia](https://github.com/italia/bootstrap-italia/releases)
  - Aggiornato **UI Kit Italia** alla versione X.Y.Z ([Changelog UI Kit Italia](https://github.com/italia/design-ui-kit/releases)
```

**Link formato**:
- Commit: `([commit: messaggio](URL))`
- Changelog: `([Changelog Nome](https://github.com/italia/[REPO]/releases))`

---

## Esempi

### MINOR con nuove schede
```markdown
### v1.8.0
24 giugno 2025
- **[Componenti](/design-system/componenti/)**
  - Preparate schede per nuove card: [Card](/design-system/componenti/card/), [Carousel](/design-system/componenti/carousel/)
- Risorse
  - Aggiornato **UI Kit Italia** alla versione 3.7.0
  - Aggiornato **Bootstrap Italia** alla versione 2.16.0
```

### PATCH con correzioni
```markdown
### v1.4.3
10 febbraio 2025
- **[Componenti](/design-system/componenti/)**
  - Corretta proprietà `pathname` in scheda [Thumbnav] ([commit link]) (grazie @Slpi11)
- Risorse
  - Aggiornato **Bootstrap Italia** alla versione 2.13.4
```

---

## Checklist

**Pre-rilascio**:
- [ ] Tipo rilascio definito
- [ ] Commit url principali raccolti
- [ ] Versioni risorse esterne verificate

**File**:
- [ ] `dsnav.yaml`: versione aggiornata in `tag.label`
- [ ] `versionamento.yaml`: tabella versioni aggiornata
- [ ] `versionamento.yaml`: changelog aggiunto in cima
- [ ] Link commit, schede e changelog funzionanti

**PR**:
- [ ] Titolo formato corretto
- [ ] Nella descrizione una to do list con issue correlate e promemoria controllo data e dati changelog
- [ ] Anteprima Vercel verificata (`/design-system/fondamenti/versionamento/` e occhio al numero versione presente a sinistra nella sidebar)
- [ ] Issue correlate linkate e risolte prima del merge + Verifica data e dettagli changelog prima del merge
- [ ] Squash & merge con nel titolo link alla PR

**Deploy**:
- [ ] Lancio azione "Deploy" (mezz'ora circa allo stato dell'arte)

**Correzioni**:
- **Errori pre-deploy**: verificare dall'anteprima Vercel del ramo `main` prima di lanciare deploy ed eventualmente riaprire PR per correzioni
- **Errori post-deploy**: PR hotfix immediata con correzioni e rilanciare deploy

---

## Coordinamento risorse

Tutte le risorse usano **semantic versioning**. I rilasci sono **coordinati nei team ma non sincroni**.

Quando rilasci documentazione:
1. **Verifica nuove versioni** Bootstrap Italia, UI Kit Italia, Design Tokens
2. **Aggiorna tabella** versioni correnti se necessario  
3. **Includi nel changelog** le risorse aggiornate

**Processo**: on-demand in base alle necessità, non periodico.

**Repository esterni**:
- Bootstrap Italia: https://github.com/italia/bootstrap-italia/releases
- UI Kit Italia: https://github.com/italia/design-ui-kit/releases  
- Design Tokens: https://github.com/italia/design-tokens-italia/releases

### Aggiornamento anteprime nelle schede componenti

Ricorda che le anteprime dei componenti e i dettagli del markup per il loro sviluppo sono generati a partire dalla [API del repository Bootstrap Italia](https://github.com/italia/bootstrap-italia/tree/main/api). 

Per aggiornare le anteprime all'ultima versione disponibile via API devi seguire questo processo: 

- **Verifica se esiste una PR creata in automatico** dal titolo: "chore(deps): update bootstrap italia and content" (cerca tra le PR aperte/recenti). 
- **Se non esiste, puoi lanciare l'azione "Content and dependencies update"** che la creerà (attenzione che se non la crea significa che è già presente l'ultima versione di Bootstrap Italia).
- **Verifica che abbia aggiornato Bootstrap Italia alla versione corrente** e che le anteprime dei componenti nelle schede funzionino correttamente (controlla nella preview Vercel della PR)
- **Assicurati che venga rilasciata prima del nuovo changelog** con review del team di sviluppo/maintainer

La struttura dei file generati a partire dai componenti di Bootstrap Italia (generati dall'azione dedicata): 
- I JSON generati in automatico a partire dalla API del repository Bootstrap Italia sono disponibili qui: https://github.com/italia/designers.italia.it/tree/main/src/data/components_json/bsi
- I file HTML generati a partire da questi JSON sono disponibili qui: https://github.com/italia/designers.italia.it/tree/main/static/examples/bsi 

Il template HTML usato per contenere i componenti è questo: https://github.com/italia/designers.italia.it/blob/main/static/examples/templates/base.html (è possibile modificarlo laddove necessario).

---

## Troubleshooting

**Errori comuni**:
- Formato data: usare "DD mese YYYY" (es. "25 luglio 2025")
- Versioni tabella non aggiornate quando ci sono nuovi rilasci esterni
- Changelog fuori ordine (sempre in cima)
- Link non funzionanti
- Versione di Bootstrap Italia delle anteprime componenti non aggiornata 
