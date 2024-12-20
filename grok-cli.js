#!/usr/bin/env node

import { Command } from 'commander';
import dotenv from 'dotenv';
import { askQuestion } from './src/commands/ask.js';
import { greetUser } from './src/commands/greet.js';

dotenv.config();

const program = new Command();

program
  .name('grok')
  .description('CLI tool to interact with X.AI\'s Grok model')
  .version('1.0.0');

program
  .command('ask')
  .description('Ask Grok a question')
  .argument('<question>', 'The question to ask')
  .action(askQuestion);

program
  .command('greet')
  .description('Greet the user')
  .argument('[name]', 'name to greet')
  .option('-u, --uppercase', 'convert to uppercase')
  .action(greetUser);

program.parse();