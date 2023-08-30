const vscode = require("vscode");
const hoverProvider = require("./hover");
const inlineCompletionProvider = require("./inlineCompletion");
const completionProvider = require("./completion");

function activate(context) {
  context.subscriptions.push(hoverProvider);

  vscode.languages.registerInlineCompletionItemProvider(
    { language: "uikeys" },
    inlineCompletionProvider
  );

  vscode.languages.registerCompletionItemProvider(
    { language: "uikeys" },
    completionProvider
  );
}

module.exports = {
  activate,
};
