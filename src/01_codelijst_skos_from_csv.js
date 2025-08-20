'use strict';
import { generate_skos } from 'maven-metadata-generator-npm';
import {
    skosOptions,
    skosSource
} from './utils/variables.js';


generate_skos(skosOptions, skosSource);

