const vscode = require("vscode");

const completionItems = [
  { insertText: new vscode.SnippetString("Alt+${1:sc_}") },
  { insertText: new vscode.SnippetString("Any+${1:sc_}") },
  { insertText: new vscode.SnippetString("Ctrl+${1:sc_}") },
  { insertText: new vscode.SnippetString("Meta+${1:sc_}") },
  { insertText: new vscode.SnippetString("Shift+${1:sc_}") },
];

const provider = {
  provideInlineCompletionItems: async (document, position, context, token) => {
    const range = document.getWordRangeAtPosition(position);
    if (range) {
      return completionItems;
    }
  },
};

module.exports = provider;
