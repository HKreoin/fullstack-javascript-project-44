#!/usr/bin/env node
import cli from '../src/cli.js';
import run from '../src/games/prime.js';

const name = cli();
run(name);