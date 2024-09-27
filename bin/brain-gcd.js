#!/usr/bin/env node
import cli from "../src/cli.js";
import gcd from "../src/games/gcd.js";

const name = cli();
gcd(name);