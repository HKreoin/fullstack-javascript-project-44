#!/usr/bin/env node
import cli from '../src/cli.js';
import calc from '../src/games/calculator.js';

const name = cli();
calc(name);
