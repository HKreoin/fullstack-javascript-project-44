#!/usr/bin/env node
import cli from "../src/cli.js";
import even from "../src/games/even.js";

const name = cli();
even(name);