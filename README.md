# Grok CLI

```
       __
   <(o )___
      (    .  >
       `-`-'
```

A simple command line tool for asking grok questions. 

## Prerequisites

- X (Twitter) Premium+ subscription
- GitHub account

## Installation

1. Create a GitHub Personal Access Token (Classic):
   - Go to GitHub Settings > Developer Settings > Personal Access Tokens > Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name (e.g., "grok-cli-access")
   - Select the `read:packages` scope
   - Click "Generate token"
   - Copy the token (you won't see it again!)

2. Create or edit `~/.npmrc` file:
```bash
@rriggin:registry=https://npm.pkg.github.com
```

3. Authenticate with GitHub:
```bash
npm login --scope=@rriggin --registry=https://npm.pkg.github.com
# Use your GitHub username
# Use your Personal Access Token as the password
# Use your GitHub email
```

4. Install the package:
```bash
npm install -g @rriggin/grok-cli
```

## Setup

1. Get your Grok API key:
   - Visit https://x.com/i/grok
   - Click on your profile picture
   - Select "Copy API Key"
   - If you don't see this option, make sure you have an active X Premium+ subscription

2. Create a `.env` file in your root directory
3. Add your Grok API key: 
```bash
GROK_API_KEY=your_api_key_here
```

## Usage

```bash
grok ask "What is the meaning of life?"
```

