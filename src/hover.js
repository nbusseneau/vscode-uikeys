const vscode = require("vscode");
const commands = require("./commands");

const hovers = {};
Object.values(commands).forEach((command) => {
  hovers[command.name] = command.documentation;
});

const provider = vscode.languages.registerHoverProvider("uikeys", {
  provideHover(document, position, token) {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    if (word in hovers) {
      return new vscode.Hover(hovers[word]);
    }
  },
});

module.exports = provider;
