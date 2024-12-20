import chalk from 'chalk';

export function validateApiKey() {
  if (!process.env.XAI_API_KEY) {
    console.error(chalk.red('Error: X.AI API key is not configured'));
    console.log(chalk.yellow('\nPlease add your X.AI API key to the .env file:'));
    console.log(chalk.gray('XAI_API_KEY=your_api_key\n'));
    process.exit(1);
  }
}