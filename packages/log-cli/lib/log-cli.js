#!/usr/bin/env node

import { program } from "commander";
import LogCore from "log-core";

program.action((cmd) => LogCore());
program.parse(process.argv);
