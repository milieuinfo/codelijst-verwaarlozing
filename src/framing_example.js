import fs from "fs";
import jsonld from "jsonld";

const context = {
    "id": "@id",
    "type": {
        "@id": "@type",
        "@type": "@id"
    },
    "page": {
        "@id": "http://xmlns.com/foaf/0.1/page",
        "@type": "@id"
    },
    "theme": {
        "@id": "http://www.w3.org/ns/dcat#theme",
        "@type": "@id"
    },
    "inScheme": {
        "@id": "http://www.w3.org/2004/02/skos/core#inScheme",
        "@type": "@id"
    },
    "prefLabel": {
        "@id": "http://www.w3.org/2004/02/skos/core#prefLabel",
        "@language": "nl"
    },
    "notation": {
        "@id": "http://www.w3.org/2004/02/skos/core#notation"
    },
    "note": {
        "@id": "http://www.w3.org/2004/02/skos/core#note",
        "@language": "nl"
    },
    "definition": {
        "@id": "http://www.w3.org/2004/02/skos/core#definition",
        "@language": "nl"
    },
    "member": {
        "@id": "http://www.w3.org/2004/02/skos/core#member",
        "@type": "@id"
    },
    "isDefinedBy": {
        "@id": "rdfs:isDefinedBy",
        "@type": "@id"
    },
    "has_concept": {
        "@type": "@id",
        "@reverse": "inScheme"
    },
    "hasTopConcept": {
        "@type": "@id",
        "@id": "skos:hasTopConcept"
    },
    "belongsTo": {
        "@type": "@id",
        "@id": "xkos:belongsTo"
    },
    "xkos": "http://rdf-vocabulary.ddialliance.org/xkos#",
    "collectie": "https://data.omgeving.vlaanderen.be/id/collection/verwaarlozing/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "thema": "http://www.eionet.europa.eu/gemet/theme/",
    "@base": "https://data.omgeving.vlaanderen.be/id/concept/verwaarlozing/"
}
const frame_concept_via_collectie = {
    "@context": context,
    "@type": "skos:Collection",
    "member": {
        "@embed": "@always"
    },
    "isDefinedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "page":{
        "@embed": "@never",
        "@omitDefault": true
    },

}

const frame_concept_via_conceptscheme = {
    "@context": context,
    "@type": "skos:ConceptScheme",
    "member": {
        "@embed": "@never",
        "@omitDefault": true
    },
    "isDefinedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "page":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "belongsTo":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "has_concept" : {
        "@embed": "@always"
    },
    "hasTopConcept":{
        "@embed": "@never",
        "@omitDefault": true
    },

}

async function frame(my_json, frame_, name) {
    const framed_json = await jsonld.frame(my_json, frame_);
    fs.writeFileSync('example/' + name + 'niet-geframed.jsonld', JSON.stringify(my_json, null, 4));
    fs.writeFileSync('example/' + name + 'geframed.jsonld', JSON.stringify(framed_json, null, 4));
}

fetch('https://data.omgeving.vlaanderen.be/id/collection/verwaarlozing/verwaarlozing',{
    headers: {
        "Accept": "application/ld+json"
    }}).then(async response => {
    frame(await response.json(), frame_concept_via_collectie, '')
});

fetch('https://data.omgeving.vlaanderen.be/id/conceptscheme/verwaarlozing',{
    headers: {
        "Accept": "application/ld+json"
    }}).then(async response => {
        frame(await response.json(), frame_concept_via_conceptscheme, 'conceptscheme_')
});