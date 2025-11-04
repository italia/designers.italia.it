# Guida Editor - Tipi di contenuto redazionali del sito Designers Italia

## Introduzione

Questa guida fornisce le istruzioni per creare e gestire i contenuti redazionali del sito **Designers Italia** attraverso i diversi tipi di contenuto disponibili.  

Ogni contenuto viene gestito tramite file **YAML** e caricato con una **Pull Request (PR)** nel repository GitHub ufficiale `/italia/designer.italia.it`.

---

## Tipi di contenuto

| Tipo      | Percorso file YAML | Formato nome file                     |
|-----------|--------------------|---------------------------------------|
| **Notizie** | `/src/data/content/community/notizie/` | `YYYYMM-titolo-notizia.yaml` |
| **Eventi**  | `/src/data/content/community/eventi/`  | `YYYYMM-titolo-evento.yaml` |
| **Media**   | `/src/data/content/community/media/`   | `YYYYMM-titolo-media.yaml`  |

---

## Struttura File YAML

### Tabella di mapping campi principali

| Campo YAML                        | Funzione | Note operative |
|-----------------------------------|----------|----------------|
| `seo.name`                        | Titolo per SEO e anteprime social | Max 60 caratteri |
| `seo.description`                 | Descrizione SEO/social | Max 160 caratteri, termina con “.” |
| `seo.image`                       | Immagine per generazione SEO/social card | PNG/JPG ottimizzato, url assoluto https://designers.italia.it/images/.. |
| `seo.pathname`                    | URL canonico della pagina | Deve iniziare e finire con `/` |
| `components.hero.title`           | Titolo visibile nella pagina | Nessun punto finale |
| `components.hero.subtitle`        | Sottotitolo/descrizione breve | Max 160 caratteri, senza punto finale |
| `components.hero.tag.label`       | Tipo contenuto (Notizia, Evento, Video, ecc.) | In maiuscoletto testuale |
| `kangaroo.tags`                   | Argomenti associati | Usare [elenco ufficiale dei tag](https://designers.italia.it/argomenti/) |
| `components.hero.kangaroo.eventInfo.items` | Solo per eventi | Dati su luogo, partecipazione, data/orario |

---

### Schemi YAML completi (puoi fare copia/incolla)
- [Schema file Notizie](#schema-file-yaml-specifico-per-notizie)  
- [Schema file Eventi](#schema-file-yaml-specifico-per-eventi)  
- [Schema file Media](#schema-file-yaml-specifico-per-media)  

---

## Processo di Pubblicazione

### 1. Preparazione dei File

1. **Crea il file YAML** seguendo lo schema appropriato  
2. **Nomina il file** con formato `YYYYMM-titolo-tutto-minuscolo.yaml` (corrisponde allo slug)  
3. **Prepara immagini ottimizzate:**  
   - Formato: JPG o PNG  
   - Peso massimo: 800Kb  
   - Dimensioni consigliate:  
     - Hero/cover: **1920×923 px**  
     - SEO/social: **1200×630 px** 
4. **Recupera il link al video su YouTube (video)**
5. **Prepara eventuali sottotitoli (video):**  
   - Formato: WebVTT (`.vtt`)  
   - Percorso: `/static/files/community/subtitles/`  
6. **Prepara eventuali trascrizioni (video/podcast):**  
   - Formato: OpenDocument (`.odt`)  
   - Percorso: `/static/files/community/subtitles/`

#### Convenzioni nomi file:

##### File YAML
- Formato: `YYYYMM-slug-tutto-minuscolo.yaml`
- Data: quella di pubblicazione prevista, non di scrittura
- Slug: solo lettere (non accentate), numeri, trattini

##### Immagini e file correlati
- Hero: `YYYYMM-slug-1920x923.jpg` (o dimensione reale in px)
- SEO: `YYYYMM-slug-1200x630.jpg` (o dimensione reale in px)
- Inline: `YYYYMM-slug-descrizione-immagine.jpg`
- Sottotitoli: `YYYYMM-slug-contenuto.vtt`
- Trascrizioni: `YYYYMM-slug-contenuto.odt`

---

### 2. Creazione della Pull Request
1. **Fork** del repository `italia/designers.italia.it`  
2. **Crea un branch** con nome descrittivo, es. `content/notizia-assistente-virtuale`  
3. **Aggiungi i file nei percorsi corretti:**  
   ```
   src/data/content/community/[tipo]/[nome-file].yaml
   static/images/community/[tipo]/
   static/files/community/subtitles/[file-sottotitoli|trascrizioni] (se necessari)
   ```
4. **Commit** con messaggio chiaro:
   ```
   content(feat): aggiungi notizia su assistenti virtuali
   
   - Aggiunto file YAML notizia
   - Caricate immagini hero e seo
   - Verificati link e metadati SEO
   ```
5. **Apri la PR** verso `main`, se possibile usa il template PR dedicato aggiungendo all'url `?expand=1&template=editorial-content.md` 
6. **Controlla l’anteprima Vercel** collegata alla PR su GitHub (alcuni minuti per generarla, fai attenzione se ci fossero errori di build)
7. **Controlla i test automatici** associati alla PR
8. **Marca la PR come "draft"** finché ci lavori
9. **Chiedi la "review"** alla redazione e/o maintainer

Nota bene: **crea la PR almeno una settimana/dieci giorni prima della data di pubblicazione prevista**, per garantire tempo sufficiente per review, eventuali correzioni e rilascio in produzione.


---

### 3. Checklist di review

#### ✅ Validazione tecnica
- [ ] File YAML valido (nessun errore in Vercel)  
- [ ] `seo.pathname` indica slug corretto (inizia/termina con `/`, non ha spazi, caratteri speciali o lettere maiuscole, corrisponde al titolo)  
- [ ] Nessun errore 404 nei link interni
- [ ] Nessun errore nei test automatici associati alla PR

#### ✅ SEO e Metadati
- [ ] `seo.name` ≤60 caratteri  
- [ ] `seo.description` ≤160 caratteri, termina con “.”  
- [ ] `seo.image` presente e caricata nel percorso corretto, è l'unica con url assoluto https://designers.italia.it/images/..

#### ✅ Contenuti
- [ ] Titoli e sottotitoli coerenti e senza errori
- [ ] Paragrafi brevi (max 3-4 righe)  
- [ ] Heading ordinati semanticamente (H2 → H3)  
- [ ] Link parlanti (evitare “clicca qui”)
- [ ] Caratteri speciali corretti, ad esempio:
 - usa l'apostrofo `’`, e non l'apice `'` al suo posto
 - usa lettere maiuscole accentate `È`, e non apici `E'`
- [ ] Contenuti validati dalla redazione e/o maintainer

#### ✅ Accessibilità
- [ ] Alt text significativo o `""` se immagine decorativa  
- [ ] Trascrizioni per contenuti audio/video laddove possibile
- [ ] Sottotitoli `.vtt` in italiano per audio/video con parlato
- [ ] Segnalato quando un link apre in nuova finestra  

#### ✅ Immagini
- [ ] Peso ≤800Kb, dimensioni corrette  
- [ ] Nomi file descrittivi e coerenti con il contenuto  

---

## Errori comuni da evitare ⚠️

- ❌ `seo.pathname` senza `/` iniziale o finale → causa breadcrumb errato  
- ❌ Descrizioni SEO troppo lunghe o senza punto finale  
- ❌ Immagini troppo pesanti (>1Mb) o senza alt text  
- ❌ Link esterni non marcati con `it-external-link` e nota “(si apre in una nuova finestra)”  
- ❌ Uso di heading saltati (H2 → H4 senza H3)  
- ❌ File YAML con indentazione errata (attenzione a usare spazi coerenti e non tab)

---

## Rimuovere un media dalla pubblicazione (Unpublish)

Se un video o podcast non deve più essere visibile negli archivi e nella ricerca, ma vuoi mantenerlo accessibile tramite link diretto, usa la funzionalità **unpublish**.

### Procedura

1. **Sposta il file** nella sottocartella `unpublished`:
```
   Da: /src/data/content/community/media/YYYYMMDD-titolo.yaml
   A:   /src/data/content/community/media/unpublished/YYYYMMDD-titolo.yaml
```

2. **Modifica il file YAML** aggiungendo la proprietà `unpublished: true` ai `metadata`:
```yaml
   metadata:
     unpublished: true
     redirect_from:
       - /community/media/YYYYMMDD-titolo/
     template:
       name: level3
     archive: media
   
   seo:
     pathname: /community/media/unpublished/YYYYMMDD-titolo/
```

### Effetti dell'unpublish

- ✅ Accessibile solo tramite link diretto
- ❌ Non appare nell'archivio Media
- ❌ Non appare nella ricerca
- ❌ Non appare negli indici per argomenti
- ❌ Escluso da sitemap e motori di ricerca (aggiunti meta per robots `noindex,nofollow`)
- ↪️ Vecchio URL originale reindirizza all'archivio Media `/community/media/`

**Nota:** richiede Pull Request e approvazione come per ogni modifica editoriale!

---

## Editorial Board

La gestione dei contenuti in evidenza è a cura della redazione e avviene tramite il file:  
`/editorial-board/highlighted-cards.yaml`

Questo file controlla:  
- Bookmark sotto la testata della homepage  
- Tre highlight orizzontali nella homepage  
- Card notizie nella sezione community della homepage  
- Card correlate nella pagina Design System  
- Card di approfondimenti nella pagina Normativa  
- Tutte le card della pagina Community  

**Nota per la redazione:** creare PR dedicate per modificare l’editorial board, senza mescolarle con nuove pubblicazioni.  

### Schema completo file `/editorial-board/highlighted-cards.yaml`

```yaml
highlightedCards:

  ################################
  # / (homepage)
  ################################
  - page: "index"
    sections:

    - section: "header-bookmarks"
      cards:
        - title: "Nuova sezione Partecipa"
          icon: "sprites.svg#it-bookmark"
          url: "/community/partecipa/"

        - title: "Nuova sezione Formazione"
          icon: "sprites.svg#it-bookmark"
          url: "/formazione/"

    - section: "highlights-home"
      cards:
        - title: "Progettare un assistente virtuale: un atto di design pubblico"
          cta: "Scopri le novità"
          text: "Nuovi strumenti pratici per definire personalità, tono di voce e comportamento di un'intelligenza artificiale conversazionale"

        - title: "Contenuti, Linguaggio, Microtesti e Tono di voce: i fondamenti di .italia si aggiornano"
          cta: "Esplora i fondamenti"
          text: "Aggiornati e integrati con un nuovo fondamento le indicazioni del design system per progettare contenuti efficaci e accessibili"
        
        - title: "Passi avanti per i kit di design e sviluppo di .italia"
          cta: "Scopri i dettagli"
          text: "Il miglioramento del design system del Paese continua"

    - section: "notizie-home"
      cards:
          - title: "Passi avanti per i kit di design e sviluppo di .italia"
          - title: "Nuovi strumenti per progettare architetture dell’informazione efficaci e intuitive"
          - title: "Definisci la direzione progettuale di un sito o servizio con il nuovo kit ‘Stato dell’arte’"

  ################################
  # /community/ 
  ################################
  - page: "community"
    sections:
    - section: "notizie"
      cards:
        - title: "Progettare un assistente virtuale: un atto di design pubblico"
        - title: "Ora tocca a voi! Le nuove iniziative per la community"
        - title: "Passi avanti per i kit di design e sviluppo di .italia"

    - section: "eventi"
      cards:
        - title: "Community lab di Developers Italia"
        - title: "Community call: i musei presentano i loro nuovi siti"
        - title: "Community call: le Aziende sanitarie locali presentano i loro nuovi siti"
        - title: "Accessibility Days - Accessibilità by design"

    - section: "media"
      cards:
        - title: "Community call: i musei presentano i nuovi siti"
        - title: "Community call: le ASL presentano i loro nuovi siti"
        - title: "Community lab: design system .italia e la progettazione di servizi pubblici digitali"
        - title: "Progettare l'interazione con le IA conversazionali"

    - section: "articoli-di-approfondimento"
      cards:
        - title: "Verso Design system .italia: la versione 1 segna un traguardo per l'accessibilità nella PA"
          img: "/images/community/articoli-di-approfondimento/20250122-verso-design-system-italia-la-versione-1-segna-un-traguardo-per-l-accessibilita-integrata-della-pa.png"
          alt: ""
          url: "https://medium.com/designers-italia/verso-design-system-italia-la-v1-segna-un-traguardo-per-l-accessibilita-integrata-della-pa-89df3e1c3af5"
          moreInfo: "di Francesco Mascia"
          tags: ["Design system", "Interfaccia utente", "Accessibilità"]

        - title: "Verso Design system .italia: dalle origini al design system aperto della PA"
          img: "/images/community/articoli-di-approfondimento/20240522-verso-design-system-italia-dalle-origini-al-design-system-aperto-della-pa.png"
          alt: ""
          url: "https://medium.com/designers-italia/verso-design-system-italia-dalle-origini-al-design-system-aperto-del-paese-66a2d5af6654"
          moreInfo: "di Daniele Tabellini"
          tags: ["Design system", "Interfaccia utente", "Accessibilità"]

        - title: "Verso Design system .italia: come è nato il nome del design system del Paese"
          img: "/images/community/articoli-di-approfondimento/20240411-verso-design-system-italia-come-e-nato-il-nome-del-design-system-del-paese.png"
          alt: ""
          url: "https://medium.com/designers-italia/verso-design-system-italia-come-%C3%A8-nato-il-nome-del-design-system-del-paese-a2720e219f00"
          moreInfo: "di Gabriella Poggioli"
          tags: ["Design system"]

  ################################
  # /design-system/ 
  ################################
  - page: "design-system"
    sections:
    - section: "novita"
      cards:
        - title: "Passi avanti per i kit di design e sviluppo di .italia"
        - title: "Contenuti, Linguaggio, Microtesti e Tono di voce: i fondamenti di .italia si aggiornano"
        - title: ".italia: risorse in miglioramento continuo" 

  ################################
  # /normativa/ 
  ################################
  - page: "normativa"
    sections:
    - section: "articoli-di-approfondimento"
      cards:
        - title: "Scrivere (semplice) per la PA: qualità nella comunicazione e diritti delle persone"
          img: "/images/community/articoli-di-approfondimento/20231108-scrivere-semplice-per-la-pa-qualita-nella-comunicazione-e-diritti-delle-persone-1198x673.png"
          alt: ""
          url: "https://medium.com/designers-italia/scrivere-semplice-per-la-pa-qualit%C3%A0-nella-comunicazione-e-diritti-delle-persone-ff28bf02bfad"
          moreInfo: "di Daniela Iozzo"
          tags: ["Progettazione contenuti"]

        - title: "Progettare con qualità: l’accessibilità al centro del design system del Paese"
          img: "/images/community/articoli-di-approfondimento/20220705-progettare-con-qualita-l-accessibilita-al-centro-del-design-system-del-paese.webp"
          alt: ""
          url: "https://medium.com/designers-italia/progettare-con-qualita-accessibilita-al-centro-del-design-system-del-paese-5e3599170099"
          moreInfo: "di Daniele Tabellini e Fabrizio Caccavello"
          tags: ["Design system", "Interfaccia utente", "Accessibilita"]

        - title: "Accessibili, usabili e inclusivi: per una progettazione etica dei servizi pubblici digitali"
          img: "/images/community/articoli-di-approfondimento/20220128-accessibili-usabili-e-inclusivi-per-una-progettazione-etica-dei-servizi-digitali.webp"
          alt: ""
          url: "https://medium.com/designers-italia/accessibili-usabili-e-inclusivi-per-una-progettazione-etica-dei-servizi-pubblici-digitali-186ed6ebc469"
          moreInfo: "di Mauro Filippi e Federica Merenda"
          tags: ["Accessibilità", "Usabilità", "Progettazione servizi"]
```

---

## Rilascio in produzione (a cura dei maintainer)

**Una volta approvate** dalla redazione e dai maintainer del sito, **le PR saranno rilasciate sul ramo principale** (azione squash & Merge verso ramo `main`), con un commit parlante collegato all'autore originale, in cui è possibile lasciare il link alla PR se utile.

Per il rilascio vero e proprio in produzione (sempre a cura dei maintainer), la procedura da seguire è: 
1. **Lanciare workflow action "prepare-deploy"** (alcuni minuti): copia le immagini dal ramo principale `main` a GitHub Pages (ramo `gh-pages`, copia preliminare necessaria per la generazione automatica delle immagini seo durante la successiva build). Se non ci sono nuovi file immagine su `main` rispetto a quanto già su GitHub Pages l'azione fallisce. È normale e si può procedere con il deploy.  
2. **Lanciare workflow action "deploy"** (da 5 a 30+ minuti): ricostruisce (build) il sito dal ramo principale `main`, usando le funzionalità cache di Gastby per ottimizzarne i tempi. Il sito è rilasciato su GitHub Pages all'indirizzo https://designers.italia.it.

Nota bene per l'eventuale modifica di contenuti esistenti: 
- **Mantieni lo stesso `pathname` e nome file dello YAML** (slug) per preservare SEO e referrals. Se fosse assolutamente necessario cambiarli, ricorda di attivare le funzionalità di redirect inserendo gli appositi attributi nella sezione "metadata": 
```yaml
metadata:
  redirect_from:
    - /community/[tipo]/[slug-precedente]
```
- **Valuta, se le modifiche fossero solo tecniche e non di contenuto, di includere `(last-update-skip)`** nel messaggio del commit per il merge su `main`. In questo modo l'informazione "Ultimo aggiornamento: " presente al fondo della pagina web (relativa ai contenuti) non si aggiornerà.   

---

## Appendice – Dimensioni immagini consigliate

| Tipo immagine   | Dimensioni consigliate | Uso principale | Formato consigliato |
|-----------------|------------------------|----------------|----------------------|
| **Hero / Cover** | 1920 × 923 px          | Immagine principale in apertura pagina (hero) | PNG o JPG ottimizzati |
| **SEO / Social** | 1200 × 630 px          | Elementi grafici che saranno usati per generare la card di anteprima per condivisione su social e metadati SEO | PNG o JPG ottimizzati |
| **Infografiche / schemi** | Variabile, max larghezza 1920 px | Contenuti editoriali e approfondimenti (immagini inline) | PNG o JPG ottimizzati |

**Note operative:**
- Peso massimo consigliato per ogni immagine: **≤ 800Kb**  
- Nomi file descrittivi, coerenti con contenuto e in minuscolo (es. `notizia-servizi-digitali-hero.jpg`)
- Aggiungere sempre un testo alternativo (`alt`) significativo, tranne per immagini puramente decorative (`alt: ""`)  
- Evitare l’uso di immagini contenenti testo: preferire soluzioni testuali per garantire accessibilità. 
- Si ricorda che l'immagine che apparirà nelle condivisioni social (immagine SEO) non è la sola immagine seo caricata, ma una versione generata a partire da questa che contiene anche titolo della pagina e altri elementi. 

---

## Appendice: template file YAML completi

### Schema campi principali condivisi tra i diversi tipi di contenuto

```yaml
# SEO (IMPORTANTE!)
seo:
  name: "Titolo del contenuto" 
  description: "Descrizione breve del contenuto - max 160 caratteri." # Con punto "." finale
  image: "https://designers.italia.it/images/community/immagine-per-creazione-card-seo.png"
  pathname: /community/[tipo]/[slug-del-contenuto]/ ## ATTENZIONE al percorso corretto

# Title
components:
  hero:
    title: "Titolo del contenuto"
    subtitle: "Descrizione breve del contenuto - max 160 caratteri" # Senza punto "." finale
    tag:
      label: [tipo e/o sottotipo] # ES: Notizia e/o Webinar, dipende dal content-type

# Metadati
kangaroo: 
  tags: [Argomento 1, Argomento 2, Argomento 3] # Attenzione alla forma rispetto all'elenco fornito degli argomenti
```

### Schema file YAML specifico per Notizie

Per le **notizie**, è importante curare i campi di metadati redazionali come `kangaroo.personalInfo.items` (in particolare *tempo di lettura* e *data*), che rendono più chiara la fruizione per chi legge. Presta attenzione anche alla coerenza tra `components.hero.title` e `seo.name` (titolo lungo vs. ottimizzato per SEO). Infine, ricordati di compilare `kangaroo.tags` scegliendo solo dall’elenco ufficiale degli argomenti.  

#### Schema completo per Notizie (puoi fare copia/incolla) 

```yaml
metadata:
  template:
    name: level3 
  archive: notizie

seo:
  name: "Progettare un assistente virtuale: un atto di design pubblico"
  description: "Nuovi strumenti pratici per definire personalità, tono di voce e comportamento di un’intelligenza artificiale conversazionale."
  image: https://designers.italia.it/images/community/202507-assistente-virtuale-1920x923.png #I XXX
  canonical: null
  pathname: /community/notizie/20250729-progettare-un-assistente-virtuale-un-atto-di-design-pubblico/

kangaroo:
  navposition:
    id: kangEnd
    items:
      - title: Ti trovi in
        icon:
          icon: "sprites.svg#it-folder"
          size: "sm"
          align: "middle"
          color: "secondary"
        label: Notizie
        url: "../"

components:
  hero:
    background: null
    centered: true
    title: "Progettare un assistente virtuale: un atto di design pubblico"
    subtitle: "Nuovi strumenti pratici per definire personalità, tono di voce e comportamento di un’intelligenza artificiale conversazionale."
    tag:
        label: Notizia
        

    kangaroo:
      id: kangarooExample
      titleSr: Metadati e link per approfondire
      noPadding: true
      tagsLabel: Parliamo di
      color: secondary
      icon:
        icon: sprites.svg#it-horn
        size: sm
        color: secondary
      tags: [Intelligenza artificiale, Contenuti e linguaggio, Progettazione interfaccia]
      personalInfo:
         items:
          - title: Tempo di lettura
            icon:
              icon: "sprites.svg#it-clock"
              size: "sm"
              align: "middle"
              color: "secondary"
            label: 5 minuti
          - title: Data
            icon:
              icon: "sprites.svg#it-calendar"
              size: "sm"
              align: "middle"
              color: "secondary"
            label: 29 luglio 2025

  imageIcons:
   image: /images/community/202507-assistente-virtuale-1920x923.png #I #XXX
   alt: ""
   background: dark

  sectionsEditorial :     

    - menu: false
      noSpace: false
      centered: true
      id: corpoNotizia
      components:
            
        - name: TextImageCta
          noSpace: false
          text: | 
            La trasformazione digitale della Pubblica Amministrazione passa anche da nuovi tipi di touchpoint: gli assistenti virtuali, o intelligenze artificiali conversazionali, stanno diventando sempre più rilevanti nei servizi pubblici. Non solo come strumenti tecnologici, ma come elementi che influenzano la relazione di fiducia tra cittadinanza e istituzioni. 

            Come Designers Italia, ci stiamo avvicinando a questo tema con attenzione. Crediamo sia fondamentale affrontarlo con un approccio progettuale consapevole, per contribuire a una cultura della progettazione che tenga conto delle implicazioni dell’intelligenza artificiale (IA) nella PA.
            
            ## Un tema chiave per il design dei servizi pubblici

            Se progettate con cura, le intelligenze artificiali conversazionali possono rivoluzionare il rapporto tra cittadinanza e PA. Automatizzano processi complessi, semplificano l'accesso ai servizi e riducono la complessità per chi ha meno familiarità con il digitale. Per le amministrazioni, questo significa anche alleggerire i carichi di lavoro e aumentare fiducia e trasparenza.

            Nei mesi scorsi, abbiamo lavorato alla creazione di alcuni strumenti pratici per aiutare designer, team di progetto e pubbliche amministrazioni a progettare assistenti virtuali efficaci e inclusivi. Non si tratta solo di dare una "voce" a un sistema automatico, ma di definirne personalità, comportamenti e limiti di autonomia, così da offrire esperienze utili, affidabili e rispettose.

            Da oggi [questi strumenti](/risorse-per-progettare/progettare/contenuti-e-linguaggio/crea-il-profilo-di-un-assistente-virtuale) sono disponibili tra le risorse di Designers Italia, parte del [kit di progettazione Contenuti e linguaggio](/risorse-per-progettare/progettare/contenuti-e-linguaggio).

            ## Un primo workshop esplorativo

            Durante la **Milano Digital Week 2024** abbiamo organizzato un workshop partecipativo per esplorare il ruolo degli assistenti virtuali nei servizi pubblici digitali. L’incontro ha coinvolto designer, stakeholder pubblici e cittadini in un esercizio di progettazione condivisa.

            Durante l’attività ci siamo confrontati su alcune domande chiave: che personalità dovrebbe avere un assistente virtuale? Che stile comunicativo usare? Quali azioni dovrebbe poter svolgere, e con quale grado di autonomia? Queste caratteristiche dovrebbero essere generalizzabili o adattarsi al servizio specifico e al suo contesto d’uso?

            Il risultato emerso è chiaro: **non esiste una soluzione valida per tutti i contesti**. Ogni servizio ha caratteristiche e destinatari diversi. Anche gli assistenti virtuali devono essere progettati tenendo conto di queste sfumature.

            È **importante definire fin dall’inizio aspetti come tono di voce**, **personalità** e **autonomia dell’assistente**. In particolare, il livello di autonomia, chiamato *agency*, non può essere deciso solo in base a ciò che la tecnologia consente, ma deve essere una **scelta progettuale consapevole e responsabile**.

            A guidare questo tipo di progettazione restano centrali le [Linee guida di design per i siti e i servizi digitali della PA](/normativa/linee-guida-di-design/), utili per garantire coerenza, inclusività ed efficacia.

            ## La comunità di pratica sulla progettazione dell’IA nella PA

            Abbiamo raccontato la nostra esperienza anche durante un incontro promosso da **Formez PA**, all’interno di un ciclo dedicato alla progettazione dell’intelligenza artificiale nella Pubblica Amministrazione.

            [Guarda il video dell'incontro](/community/media/20241205-progettare-l-interazione-con-le-ia-conversazionali/) per approfondire i principali spunti emersi dal workshop, i principi per progettare assistenti virtuali e le nuove risorse oggi disponibili.

            ## Nuovi strumenti validati sul campo

            I nuovi strumenti sono stati già testati con la **Scuola Normale Superiore**, che li ha usati per progettare un [assistente virtuale per l'orientamento universitario](https://medium.com/@cantu.daria/88e6dca498ec). 

            L’esperienza ha confermato l’efficacia degli strumenti anche in contesti complessi come quello accademico, aiutando il team a definire tono, identità e comportamento dell’assistente in base ai bisogni delle persone a cui si rivolge.

        - name: TextImageCta
          title: Progetta un assistente virtuale 
          headingLevel: 2
          ctasVertical: true
          ctas:
          - label: "Vai agli strumenti"
            url: "/risorse-per-progettare/progettare/contenuti-e-linguaggio/crea-il-profilo-di-un-assistente-virtuale/"
            icon:
              icon: sprites.svg#it-arrow-right
              color: primary
              align: middle
              hidden: true
              size: sm ms-2
```

---

### Schema file YAML specifico per Eventi

Per gli **eventi**, il campo più delicato è `components.hero.kangaroo.eventInfo.items`, che deve riportare con precisione **luogo, modalità di partecipazione e data/orario**. Ogni voce va descritta chiaramente e, se contiene un link esterno (per registrazione o accesso), deve avere attributi `blank: true` e `screenReaderText` per l’accessibilità. Attenzione anche alla `tag.label`, che va impostata in modo descrittivo (es. *Webinar*, *Community Lab*).  

#### Schema completo per Eventi (puoi fare copia/incolla) 

```yaml
# ————————————————————————————————————————————
# CREATEPAGE GATSBY
# ————————————————————————————————————————————
metadata:
  template:
    name: level3 
  archive: eventi

seo:
  name: "Community lab di Developers Italia"
  description: "Software a riuso nella PA: linee guida, strumenti e buone pratiche."
  image: https://designers.italia.it/images/community/eventi/2025/20250710-community-lab-developers-italia.png #I #XXX
  canonical: null
  pathname: /community/eventi/20250710-community-lab-developers-italia

kangaroo:
  navposition:
    id: kangEnd
    items:
      - title: Ti trovi in
        icon:
          icon: "sprites.svg#it-folder"
          size: "sm"
          align: "middle"
          color: "secondary"
        label: Eventi
        url: "../"

components:
  hero:
    background: null
    centered: true
    title: "Community lab di Developers Italia"
    subtitle: " Software a riuso nella PA: linee guida, strumenti e buone pratiche"
    tag:
        label: Community lab
        

    kangaroo:
      id: kangarooExample
      titleSr: Metadati e link per approfondire
      noPadding: true
      tagsLabel: Parliamo di
      color: secondary
      icon:
        icon: sprites.svg#it-horn
        size: sm
        color: secondary
      tags: [Community, Community lab, Open source]
      eventInfo:
         items:
          - title: Luogo
            icon:
              icon: "sprites.svg#it-map-marker"
              size: "sm"
              align: "middle"
              color: "secondary"
            label:  Online
            url:
            blank: true
            screenReaderText: " (si apre in una nuova finestra)"
            text: |
            
          - title: Partecipazione
            icon:
              icon: "sprites.svg#it-user"
              size: "sm"
              align: "middle"
              color: "secondary"
            label: "Gratuita con registrazione" #C
            url: https://ec.europa.eu/eusurvey/runner/Communitylab-DevelopersItalia
            blank: true
            screenReaderText: " (si apre in una nuova finestra)"
          - title: Data e orario
            icon:
              icon: "sprites.svg#it-calendar"
              size: "sm"
              align: "middle"
              color: "secondary"
            label: "10 luglio 2025, 15.30–17.00"

  # imageIcons:
  #   image: /images/community/articoli-di-approfondimento/eventi/2022/INTERLINK-news-quinta-assemblea-generale-DEF.png
  #   alt: Descrizione immagine grande

  sectionsEditorial :
    - menu: false
      centered: true
      id: corpoEvento
      components:

        # - name: TextImageCta
        #   text: |
        #     ![What are the lagal and technical barriers to co-delivery?](/images/community/articoli-di-approfondimento/eventi/2022/INTERLINK-news-quinta-assemblea-generale-DEF.jpg)


        - name: TextImageCta
          text: |
            Il prossimo Community Lab di Developers Italia propone un appuntamento dedicato al tema del [**Software a riuso della PA**](https://developers.italia.it/), rivolto ad amministrazioni, tecnici delle PA e fornitori.
            Durante il webinar verranno approfondite le buone pratiche per la creazione, pubblicazione, e installazione del software a riuso, oltre al lancio del nuovo thread dedicato al software a riuso su Forum Italia.
            Quest’ultimo sarà uno spazio di confronto aperto per porre domande, raccogliere casi d’uso, criticità ed esperienze da parte della community tecnica e istituzionale.
            
            I community lab sono incontri online dedicati alla condivisione di conoscenze e migliori pratiche sulla progettazione e sviluppo efficace dei servizi pubblici digitali con gli esperti che curano l’evoluzione delle risorse di Designers e Developers Italia.

          ctas:
          - label: Registrati
            url: https://ec.europa.eu/eusurvey/runner/Communitylab-DevelopersItalia
            blank: true
            screenReaderText: " (si apre in una nuova finestra)" #C
            icon:
              icon: sprites.svg#it-external-link
              color: primary
              align: middle
              hidden: true
              size: sm ms-2
```

---

### Schema file YAML specifico per Media

Per i **media**, i campi fondamentali sono quelli del componente `MediaPlayer`: `url` (link YouTube o altro servizio), `poster` (immagine di anteprima, **formato 16:9**), `subtitles` e `trascription`. È obbligatorio fornire sottotitoli `.vtt` in italiano e, quando disponibili, una trascrizione accessibile in formato `.odt`. Inoltre, la `tag.label` deve indicare chiaramente sia il tipo di contenuto (es. *Video* o *Podcast*) sia l’eventuale format (es. *Community Lab*).  

#### Nota su sottotitoli e trascrizioni
Ricorda: **i sottotitoli sono obbligatori.**

Detto questo, rispetto alle trascrizioni (o meglio a cosa intendiamo noi per trascrizioni [una alternativa testuale con gli stessi contenuti narrati a voce]) se non hai a disposizione un file di trascrizione in formato testo, ma è disponibile su YouTube, puoi usare la dicitura: 

```yaml
          trascription: |
            È disponibile la sola trascrizione generata automaticamente nella [scheda del video su YouTube](https://www.youtube.com/watch?v=3VzeQP7thUA)   
```

Per mostrare una trascrizione in pagina, puoi linkare un file in formato aperto da scaricare (ODT), e aggiungerne il contenuto per intero, o in parte, anche in pagina. Fai attenzione alla gerarchia dei titoli H in questo caso. Ad esempio: 

```yaml
          trascription: |
            Scarica la [trascrizione in formato ODT](/files/community/subtitles/20230324-comprendere-il-contesto-d-uso.odt). 

            [...]

            ### La parola a Nome Relatore

            Innanzitutto buongiorno a tutti, io mi chiamo ...

            ### La parola a Nome Relatore

            Grazie mille, buongiorno nuovamente a tutti...
            
```

#### Schema completo per Media (puoi fare copia/incolla) 

```yaml
# ————————————————————————————————————————————
# CREATEPAGE GATSBY
# ————————————————————————————————————————————
metadata:
  template:
    name: level3
  archive: media

seo:
  name: "Community lab di Developers Italia: software a riuso nella PA"
  description: "Approfondimento sulle linee guida, gli strumenti pratici e le buone pratiche."
  image: https://designers.italia.it/images/community/media-thumbnails/20250710-community-lab-developers-software-a-riuso-nella-pa.png #I #XXX
  canonical: null
  pathname: /community/media/20250710-community-lab-developers-software-a-riuso-nella-pa/
  
kangaroo:
  navposition:
    id: kangEnd
    items:
      - title: Ti trovi in
        icon:
          icon: "sprites.svg#it-folder"
          size: "sm"
          align: "middle"
          color: "secondary"
        label: Media
        url: "../"

components:
  hero:
    background: null
    centered: true
    title: "Community lab di Developers Italia: software a riuso nella PA"
    subtitle: "Approfondimento sulle linee guida, gli strumenti pratici e le buone pratiche"
    tag:
      label: Video - Community Lab
      

    kangaroo:
      id: kangarooExample
      titleSr: Metadati e link per approfondire
      noPadding: true
      tagsLabel: Parliamo di
      color: secondary
      icon:
        icon: sprites.svg#it-horn
        size: sm
        color: secondary
      tags: [Community lab, Open source, Sviluppo interfaccia]

  sectionsEditorial:

    # FORMATO VIDEO DEFAULT
    - fullColumn: false # fullwidth vs normal
      full: true # large column vs normal
      noSpace: false 
      centered: true
      background: medium
      components:
        - name: MediaPlayer
          lang: it
          url: https://www.youtube.com/watch?v=3VzeQP7thUA
          poster: /images/community/media-thumbnails/20250710-community-lab-developers-software-a-riuso-nella-pa.png
          subtitles: /files/community/subtitles/20250710-community-lab-developers-software-a-riuso-nella-pa.vtt
          trascriptionHeadingLevel: 2
          trascriptionLabel: "Trascrizione"
          trascriptionLabelEN: "Transcription"
          trascription: |
            È disponibile la sola trascrizione generata automaticamente nella [scheda del video su YouTube](https://www.youtube.com/watch?v=3VzeQP7thUA)            

    - noSpace: false 
      centered: true
      components:
        - name: TextImageCta
          # title: 
          text: |
            L'incontro dedicato ad esporre **buone pratiche per la creazione, pubblicazione e installazione del software a riuso** nella Pubblica Amministrazione. Durante l’evento sono state presentate le linee guida e gli adempimenti richiesti dall’Agenzia per l’Italia Digitale (AgID), è stato illustrato passo per passo come inserire un software nel catalogo di Developers Italia, e soprattutto è stata un’occasione di confronto per progettisti, sviluppatori e professionisti che operano nella PA o collaborano con essa.

          ctas:
          - label: Esplora il catalogo del riuso #C
            url: "https://developers.italia.it/it/software" #M
            blank: false #M #C true if new tab for external links
            icon:
              icon: sprites.svg#it-arrow-right #C #I #it-arrow-right | it-external-link for external links
              color: primary
              align: middle
              hidden: true
              size: sm
              addonClasses: ms-2 
```
