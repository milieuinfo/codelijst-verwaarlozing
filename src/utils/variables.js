'use strict';
import yaml from 'js-yaml';
import fs, {readFileSync} from "fs";
import rdf from "@zazuko/env-node";
import {metadataOptions, shapes_dcat, dcat_rules, frame_catalog} from "maven-metadata-generator-npm/src/utils/variables.js";


const config = yaml.load(fs.readFileSync('./source/config.yml', 'utf8'));

const virtuoso = config.deploy.virtuoso ;

const prefixes = Object.assign( {}, config.skos.prefixes, config.prefixes, { '@base' : config.skos.prefixes.concept })

const context = JSON.parse(fs.readFileSync(config.source.path + config.source.context));

const context_prefixes = Object.assign({},context , prefixes)

const frame_concept_via_conceptscheme = {
    "@context": context,
    "@type": ["http://www.w3.org/2004/02/skos/core#ConceptScheme", "http://www.w3.org/2004/02/skos/core#Collection"],
    "member": {
        "@embed": "@never",
        "@omitDefault": true
    },
    "levels":{
        "@embed": "@never",
        "@omitDefault": true

    },
    "inScheme" : {
        "@embed": "@never",
        "@omitDefault": true
    },

    "hasTopConcept":{
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@always",
        "@omitDefault": true,
        "gekoppelde_eigenschap" : {
            "@embed": "@never",
            "@omitDefault": true
        },
        "seeAlso" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "semanticRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "mappingRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "exactMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowerTransitive":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "memberOf": {
            "@embed": "@never",
            // "@reverse": "member",
            "@omitDefault": true
        },
        "related":{
            "@embed": "@never",
            "@omitDefault": true
        },

        "relatedMatch":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "hasVersion": {
            "@embed": "@never",
            "@omitDefault": true
        },
        "isVersionOf": {
            "@embed": "@never",
            "@omitDefault": true
        },
        "relation":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "broader":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrower":{
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@always",
            "@omitDefault": true,
            "gekoppelde_eigenschap" : {
                "@embed": "@never",
                "@omitDefault": true
            },
            "memberOf": {
                "@embed": "@never",
                "@omitDefault": true
            },
            "closeMatch" : {
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "@embed": "@never",
                "@omitDefault": true
            },
            "semanticRelation" : {
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "@embed": "@never",
                "@omitDefault": true
            },
            "mappingRelation" : {
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "@embed": "@never",
                "@omitDefault": true
            },
            "exactMatch" : {
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "@embed": "@never",
                "@omitDefault": true
            },
            "hasVersion": {
                "@embed": "@never",
                "@omitDefault": true
            },
            "isVersionOf": {
                "@embed": "@never",
                "@omitDefault": true
            },
            "relatedMatch":{
                "@embed": "@never",
                "@omitDefault": true
            },
            "related":{ "@embed": "@never",
                "@omitDefault": true
            },
            "broader":{
                "@embed": "@never",
                "@omitDefault": true
            },
            "broaderTransitive":{
                "@embed": "@never",
                "@omitDefault": true
            },
            "narrowerTransitive":{
                "@embed": "@never",
                "@omitDefault": true
            },
            "relation":{
                "@embed": "@never",
                "@omitDefault": true
            },
            "narrower":{
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "@embed": "@always",
                "@omitDefault": true,
                "gekoppelde_eigenschap" : {
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "memberOf": {
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "closeMatch" : {
                    "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "semanticRelation" : {
                    "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "mappingRelation" : {
                    "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "exactMatch" : {
                    "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "hasVersion": {
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "isVersionOf": {
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "relatedMatch":{
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "related":{ "@embed": "@never",
                    "@omitDefault": true
                },
                "narrowerTransitive":{
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "broaderTransitive":{
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "broader":{
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "relation":{
                    "@embed": "@never",
                    "@omitDefault": true
                },
                "narrower":{
                    "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                    "@embed": "@always",
                    "@omitDefault": true,
                    "gekoppelde_eigenschap" : {
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "memberOf": {
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "closeMatch" : {
                        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "semanticRelation" : {
                        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "mappingRelation" : {
                        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "exactMatch" : {
                        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "hasVersion": {
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "isVersionOf": {
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "relatedMatch":{
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "related":{ "@embed": "@never",
                        "@omitDefault": true
                    },
                    "narrowerTransitive":{
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "broaderTransitive":{
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "broader":{
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "relation":{
                        "@embed": "@never",
                        "@omitDefault": true
                    },
                    "narrower":{

                        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                        "@embed": "@always",
                        "@omitDefault": true,
                        "gekoppelde_eigenschap" : {
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "closeMatch" : {
                            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "semanticRelation" : {
                            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "mappingRelation" : {
                            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "exactMatch" : {
                            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "memberOf": {
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "hasVersion": {
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "isVersionOf": {
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "relatedMatch":{
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "related":{ "@embed": "@never",
                            "@omitDefault": true
                        },
                        "narrowerTransitive":{
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "broaderTransitive":{
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "broader":{
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "relation":{
                            "@embed": "@never",
                            "@omitDefault": true
                        },
                        "narrower":{
                            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                            "@embed": "@always",
                            "@omitDefault": true,
                            "gekoppelde_eigenschap" : {
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "memberOf": {
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "closeMatch" : {
                                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "semanticRelation" : {
                                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "mappingRelation" : {
                                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "exactMatch" : {
                                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "hasVersion": {
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "isVersionOf": {
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "relatedMatch":{
                                "@embed": "@never",
                                "@omitDefault": true
                            },
                            "related":{ "@embed": "@never",
                                "@omitDefault": true
                            },
                            "relation":{
                                "@embed": "@never",
                                "@omitDefault": true
                            },

                        },
                    },
                },
            },
        },
    }
}

const frame_concept_via_collectie = {
    "@context": context,
    "@type": ["http://www.w3.org/2004/02/skos/core#Concept"],
    "seeAlso": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",


    },

    "topConceptOf":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "isReferencedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },

    "hasTopConcept": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    },
}


const frame_skos_prefixes = {
    "@context": context,
    "@type": ["http://www.w3.org/2004/02/skos/core#ConceptScheme", "http://www.w3.org/2004/02/skos/core#Collection", "http://www.w3.org/2004/02/skos/core#Concept"],
    "member": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@always",
        "@omitDefault": true,
        "inScheme": {
            "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "@embed": "@never",
            "@omitDefault": true
        },
        "topConceptOf": {
            "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
            "@embed": "@never",
            "@omitDefault": true}
        ,
        "broader": {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrower": {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "theme": {
            "@embed": "@never",
            "@omitDefault": true
        },
        "references":{
            "@embed": "@never",
            "@omitDefault": true
        },
        "relation":{
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "broaderTransitive" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "broadMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "closeMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "exactMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "mappingRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowerTransitive" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "narrowMatch" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
        "semanticRelation" : {
            "@type": "http://www.w3.org/2004/02/skos/core#Concept",
            "@embed": "@never",
            "@omitDefault": true
        },
    },
    "inScheme": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    },

    "topConceptOf": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "broader": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "narrower": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "hasTopConcept": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "references":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "isReferencedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "relation":{
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broaderTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broadMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "closeMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "exactMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "mappingRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowerTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "semanticRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },

}


const frame_skos_no_prefixes = {
    "@context": context,
    "@type": ["http://www.w3.org/2004/02/skos/core#ConceptScheme", "http://www.w3.org/2004/02/skos/core#Collection", "http://www.w3.org/2004/02/skos/core#Concept"],
    "member": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "gekoppelde_eigenschap" : {
        "@embed": "@never",
        "@omitDefault": true
    },
    "inScheme": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    },

    "topConceptOf": {
        "@type": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "broader": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    }
    ,
    "narrower": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "hasTopConcept": {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "references":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "isReferencedBy":{
        "@embed": "@never",
        "@omitDefault": true
    },
    "relation":{
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broaderTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "broadMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "closeMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "exactMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "seeAlso" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "mappingRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowerTransitive" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "narrowMatch" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    },
    "semanticRelation" : {
        "@type": "http://www.w3.org/2004/02/skos/core#Concept",
        "@embed": "@never",
        "@omitDefault": true
    }
}



const xsdOptions = {"file": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.xsd, "urn": ('urn:' + metadataOptions.groupId + ':' + metadataOptions.artifactId)}

const turtlePath = config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.turtle

const ntriplesPath = config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.nt

const jsonldOptions = {"file": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.jsonld, "frame": frame_skos_prefixes}

const csvOptions = {"file": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.csv, "frame": frame_skos_no_prefixes}

const jsonOptions = {"file": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.json, "frame": frame_skos_no_prefixes}

const parquetOptions = {"file": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.parquet, "frame": frame_skos_no_prefixes}

const excelOptions = {"file": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.xlsx,
    "sourcefile": config.skos.path + config.skos.name + '/' + config.skos.name + config.skos.csv,
    "sheetName": config.types}

const skos_prefixes = Object.assign( {}, config.skos.prefixes, config.prefixes, { '@base' : config.skos.prefixes.concept })

const skos_context = JSON.parse(readFileSync(config.source.path + config.source.context));

const dcat_dataset_jsonld = '../temp/' + config.dcat.path_dataset + metadataOptions.artifactId + '/' + config.dcat.dataset_jsonld

const dcat_dataset_turtle = '../temp/' + config.dcat.path_dataset + metadataOptions.artifactId + '/' + config.dcat.dataset_turtle

const dcat_catalog_jsonld = '../temp/' + config.dcat.path_catalog + metadataOptions.artifactId + '/' + config.dcat.catalog_jsonld

const dcat_catalog_turtle = '../temp/' + config.dcat.path_catalog + metadataOptions.artifactId + '/' + config.dcat.catalog_turtle

const datasetOptions = {
    "turtlePath": dcat_dataset_turtle,
    "jsonldOptions": {"file": dcat_dataset_jsonld, "frame": frame_catalog}
}

const catalogOptions = {
    "turtlePath": dcat_catalog_turtle,
    "jsonldOptions": {"file": dcat_catalog_jsonld, "frame": frame_catalog}
}

const skosOptions = {
    "turtlePath": turtlePath,
    "jsonOptions": jsonOptions,
    "jsonldOptions": jsonldOptions,
    "ntriplesPath": ntriplesPath,
    "csvOptions": csvOptions,
    "parquetOptions": parquetOptions,
    "excelOptions": excelOptions,
    //"xsdOptions": xsdOptions
}

const skosSource = {
    "sourcePath": config.source.path + config.source.codelijst_csv,
    "contextPrefixes": Object.assign({},skos_context , skos_prefixes),
    "rules": config.skos.rules,
    "shapesDataset": await rdf.dataset().import(rdf.fromFile(config.ap.path + config.ap.name + '-' + config.ap.type + '/' + config.ap.name + '-' + config.ap.type + config.ap.turtle)),
    "prefixes": Object.assign( {}, config.skos.prefixes, config.prefixes)
}

const metadataSource = {
    "shapesDataset": shapes_dcat,
    "rules": dcat_rules,
    "prefixes": config.prefixes
}


export {
    frame_concept_via_conceptscheme,
    frame_concept_via_collectie,
    virtuoso,
    skosOptions,
    skosSource,
    metadataSource,
    metadataOptions,
    datasetOptions,
    catalogOptions
};