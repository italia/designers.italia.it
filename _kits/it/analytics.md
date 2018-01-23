---
title: "Web Analytics: Starter Kit"
lang: it
layout: download
subtitle: Modello di report/dashboard per Google Analytics e Piwik
backgroundImage : '/assets/images/posts/cover-personas.jpg'
backgroundColor: '#439af1'
tags: 
  - analytics
  - usability
  
---

Questo starter kit ha l’obiettivo di fornire - a chi si occupa a vario titolo del sito web di una pubblica amministrazione - indicazioni operative su come produrre e distribuire un report basico di web analytics, con la finalità di condividerne i dati all’interno di un team di lavoro o con altri stakeholder. Il kit prevede:

**Google Analytics**
  - un modello di dashboard dinamica già pronto, importabile su Google Analytics
  - un esempio di dashboard che è possibile generare con la piattaforma Google Data Studio

**Piwik**
  - un esempio di dashboard che è possibile generare con Piwik

## Google Analytics

### Modello di dashboard dinamica

Le dashboard di Google Analytics sono costituite da un insieme di widget che consentono il monitoraggio di più combinazioni di dati contemporaneamente all’interno di una determinata vista. I dati si aggiornano istantaneamente al variare dei controlli “intervallo di tempo”.

È possibile creare dashboard ex novo in base alle proprie esigenze (nella sezione **Personalizzazione → Dashboard** dell’account Google Analytics) oppure importare uno dei modelli pubblicati nella [Google Analytics Solution Gallery →](https://www.google.com/url?q=https://analytics.google.com/analytics/gallery/&sa=D&ust=1496159920213000&usg=AFQjCNEscjhlyktuYvElpcs5ASMTT2CqYA).

Il template “[Starter kit] Dashboard sito web PA” - disponibile sulla Google Analytics Solution Gallery  - è una soluzione dinamica per la generazione di un report analytics di base destinato all’analisi dei dati del sito web di una pubblica amministrazione.

È possibile importarlo sul proprio account GA utilizzando il pulsante Import della galleria soluzioni e scegliendo in seguito la vista di dati a cui applicarlo.

![]({{'/assets/images/kits/analytics-1.png' | relative_url }})

A configurazione importata, sarà possibile visualizzare i dati all’interno del rapporto **Personalizzazione → dashboard**.

![]({{'/assets/images/kits/analytics-2.png' | relative_url }})

Nella dashboard così generata saranno visualizzabili i seguenti dati:

- Visite totali
- Visite uniche
- Pagine visualizzate
- Pagine più visitate
- Siti referenti
- Canali di acquisizione del traffico (%)
- Visite per browser (%)
- Categoria di dispositivo (%)
- Provenienza geografica degli utenti
- Visite per modello di dispositivo mobile (%)
- Visite provenienti dai social network (%)
- Termini di ricerca su sito

La vista dei dati si aggiorna dinamicamente modificando l’intervallo di tempo d’interesse per la rilevazione (con il controllo “Intervallo di date”); è possibile inoltre effettuare comparazioni dei dati per periodi di tempo diversi, così come per i normali rapporti in Google Analytics.
Il template della dashboard può essere rinominato e customizzato a seconda delle esigenze (ad esempio eliminando o modificando i widget con il pulsante a forma di matita presente all’interno di ogni box).

La dashboard consente inoltre di:
- esportare i dati in formato PDF
- inviare il report via email una tantum
- impostare un invio periodico del report ad uno o più utenti  
<br>
- [Modello di dashboard dinamica per Google Analytics →](https://analytics.google.com/analytics/gallery/#posts/search/%3F_.start%3D0%26_.tab%3DMy%26_.sort%3DDATE%26_.viewId%3Dp2XyDmehQA-yNgkA39HfiQ/)
- [Guida all’uso delle dashboard in Google Analytics →](https://support.google.com/analytics/answer/1068216?hl=it)

### Google Data Studio (Beta)

Chi ha già dimestichezza con la generazione delle dashboard, può utilizzare inoltre la piattaforma Google Data Studio (Beta) per la creazione di soluzioni di monitoraggio dinamiche dall’impatto grafico più incisivo.
Data Studio consente la condivisione della configurazione dinamica con altri utenti, sia in modalità di sola lettura che in modalità di modifica completa.

![]({{'/assets/images/kits/analytics-3.png' | relative_url }})

![]({{'/assets/images/kits/analytics-4.png' | relative_url }})

Esempio di dashboard di Google Data Studio:

- [Link a Google Data Studio →](https://datastudio.google.com)
- [Guida di Google Data Studio →](https://support.google.com/datastudio/topic/6267740?hl=it&ref_topic=6267739)
- [Tutorial Video →](https://support.google.com/datastudio/answer/6390659?utm_source=in-product&utm_medium=feature-panel&utm_campaign=videos)

## Piwik

### Generare una dashboard

Anche con Piwik è possibile generare visualizzazioni dinamiche dei dataset, scegliendo fra i widget a disposizione nel menu a tendina “Dashboard” e organizzando la vista dei dati in base alle proprie esigenze (drag&drop).
E’ possibile modificare la visualizzazione dei dati all’interno del singolo widget, nonché esportare i dati in esso contenuti nei seguenti formati: CSV,TSV,XML, json, Php, RSS.

![]({{'/assets/images/kits/analytics-5.png' | relative_url }})

*Esempio di dashboard per un sito web generata all’interno di Piwik*

Per generare un report customizzato e impostarne l’invio periodico, è sufficiente recarsi nella sezione Amministrazione e utilizzare la funzione Report Email. Questa funzionalità consente di selezionare i dataset da includere nel report; scegliere il formato dell’output (PDF, HTML, CSV); settare la frequenza di invio e i relativi destinatari.

![]({{'/assets/images/kits/analytics-6.png' | relative_url }})

*Creazione e programmazione di un report email in Piwik*
