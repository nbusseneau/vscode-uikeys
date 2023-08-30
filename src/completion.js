const vscode = require("vscode");
const commands = require("./commands");

const completionItems = [];
Object.values(commands).forEach((command) => {
  const completionItem = {
    label: {
      label: command.name,
      description: command.name,
    },
    detail: command.name,
    documentation: command.documentation,
    kind: vscode.CompletionItemKind.Event,
  };
  if (command.parameters) {
    completionItem.detail = `${command.name} ${command.parameters}`;
    completionItem.label.detail = ` ${command.parameters}`;
  }
  if (command.snippet) {
    completionItem.insertText = command.snippet;
  }
  completionItems.push(completionItem);
});

const provider = {
  provideCompletionItems: async (document, position, token, context) => {
    const line = document.lineAt(position);
    // kludge to allow CTRL+SPACE suggestions on empty line or on first word of
    // line, but not subsequent words
    if (line.isEmptyOrWhitespace || line.text.match(/^\s*(\S+)\s*$/)) {
      return completionItems;
    }
  },
};

module.exports = provider;
