# codelijst-verwaarlozing

Dit project genereert en publiceert gecontroleerde vocabularia (codelijsten) over **verwaarlozing en leegstand van bedrijfsgebouwen** in Vlaanderen. De codelijsten zijn opgezet in het kader van het LEEGSTAND-project en vertegenwoordigen de logica en typering die vervat is in de Vlaamse regelgeving.

## Inhoud

De dataset bevat de volgende SKOS-conceptschema's:

| Conceptschema | Beschrijving |
|---|---|
| `uitgesproken_gebrek` | Kenmerken van verwaarlozing aan gebouwen: gebreken aan gebouwonderdelen (buitenmuren, dak, trappen, …), stabiliteit, veiligheid en vochtindringing |
| `procedure` | Procedures in het kader van leegstaande en verwaarloosde bedrijfsruimten: registreren, beroep, aanvraag schrapping, aanvraag opschorting heffing |
| `beslissing` | Beslissingen die genomen kunnen worden binnen die procedures |
| `rol` | Rollen van betrokken partijen |
| `schrapping` | Redenen voor schrapping uit de inventaris |
| `stuk` | Types van stukken/documenten binnen procedures |
| `aanvraag_opschorting_heffing_reden` | Redenen voor het aanvragen van opschorting van de heffing |

### Publicatie

- **Dataset URI**: `https://data.omgeving.vlaanderen.be/id/dataset/codelijst-verwaarlozing`
- **Catalogus**: `https://data.omgeving.vlaanderen.be/id/catalog/codelijst`
- **SPARQL-endpoint**: `https://data.omgeving.vlaanderen.be/sparql`
- **Landingspagina**: `https://data.omgeving.vlaanderen.be/doc/catalog/codelijst.html`
- **Licentie**: [Modellicentie gratis hergebruik v1.0](http://data.vlaanderen.be/id/licentie/modellicentie-gratis-hergebruik/v1.0)
- **Taal**: Nederlands
- **Toegang**: Publiek

## Werkwijze

### Bronbestand

De concepten worden beheerd in één CSV-bronbestand:

```
src/source/codelijst-source.csv
```

Elke rij definieert een concept of conceptschema met kolommen zoals `uri`, `notation`, `prefLabel`, `definition`, `broader`, `collections`, `inScheme`, enzovoort.

De configuratie (paden, prefixen, DCAT-metadata, …) staat in:

```
src/source/config.yml
```

### Generatiestappen

Het project doorloopt drie stappen via Node.js-scripts, met behulp van de npm-bibliotheek `@milieuinfo/maven-metadata-generator-npm`:

**Stap 1 — SKOS genereren vanuit CSV** (`src/01_codelijst_skos_from_csv.js`)

Leest het bronbestand en genereert de SKOS-bestanden in alle distributiefomaten:

| Bestand | Formaat |
|---|---|
| `verwaarlozing.ttl` | Turtle (RDF) |
| `verwaarlozing.jsonld` | JSON-LD |
| `verwaarlozing.json` | JSON |
| `verwaarlozing.csv` | CSV |
| `verwaarlozing.nt` | N-Triples |
| `verwaarlozing.parquet` | Apache Parquet |
| `verwaarlozing.xlsx` | Excel |

De uitvoer komt in:
```
src/main/resources/be/vlaanderen/omgeving/data/id/conceptscheme/verwaarlozing/
```

**Stap 2 — DCAT-metadata genereren** (`src/02_metadata.js`)

Genereert de dataset- en catalogusmetadata conform DCAT:

- `temp/.../dataset/codelijst-verwaarlozing/dataset.ttl` / `dataset.jsonld`
- `temp/.../catalog/codelijst-verwaarlozing/catalog.ttl` / `catalog.jsonld`

**Stap 3 — JSON-LD framen** (`src/03_frame_jsonld.js`)

Past N3-redeneren toe op de gegenereerde JSON-LD en produceert twee alternatieve views:

- `verwaarlozing_collection_member.jsonld` — gegroepeerd via collecties
- `verwaarlozing_conceptscheme_topconcept_narrower.jsonld` — gegroepeerd via conceptschema's met hiërarchie

### Build en distributie

Maven (`pom.xml`) verpakt de gegenereerde bestanden in twee JAR-artefacten:

- `codelijst-verwaarlozing-<versie>-codelijst.jar` — de SKOS-distributies
- `codelijst-verwaarlozing-<versie>-metadata.jar` — de DCAT-metadata

De distributies worden gepubliceerd naar `https://datasets.omgeving.vlaanderen.be` en geladen in de Virtuoso triplestore.

## Projectstructuur

```
src/
├── source/
│   ├── codelijst-source.csv          # Bronbestand met alle concepten
│   └── config.yml                    # Configuratie
├── 01_codelijst_skos_from_csv.js     # Stap 1: SKOS genereren
├── 02_metadata.js                    # Stap 2: DCAT-metadata genereren
├── 03_frame_jsonld.js                # Stap 3: JSON-LD framen
├── utils/
│   └── variables.js                  # Gedeelde opties en frames
└── main/resources/
    └── be/vlaanderen/omgeving/data/id/
        └── conceptscheme/verwaarlozing/  # Gegenereerde uitvoer
```
