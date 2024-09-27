#!/usr/bin/env node
import cli from '../src/cli.js';
import run from '../src/games/progression.js';

const name = cli();
run(name);