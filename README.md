# seyrinian-tools

This is a collection of tools that I have created to help me with my projects. I am sharing them in the hope that they will be useful to others.

## Project installation

## Github repository setup

### Secret keys

You need to setup the following secret key to assure you github workflow will work correctly:

- SEMANTIC_BOT_APP_ID: The Github App ID you create to use semantic-release
- SEMANTIC_BOT_PRIVATE_KEY: The private key of the Github App you create to use semantic-release
- NPM_TOKEN: The token to publish the package to npm (you can create it in your npm account)

### Semantic-release

This tool is used to automatically generate releases based on the commit messages. To use it on github you must setup a Github Apps.
