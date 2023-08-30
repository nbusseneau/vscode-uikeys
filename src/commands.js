const vscode = require("vscode");

const commands = {
  bind: {
    name: "bind",
    parameters: "keyset action",
    documentation: new vscode.MarkdownString(
      "Append *action* to list of actions for *keyset*. *action* can be a plain command, or a command with arguments."
    ),
    snippet: new vscode.SnippetString("bind ${1:keyset} ${2:action}"),
  },
  fakemeta: {
    name: "fakemeta",
    parameters: "keysym",
    documentation: new vscode.MarkdownString(
      "Assign *keysym* as the **Meta** modifier. *keysym* must be a registered key symbol. Use **none** to disable."
    ),
    snippet: new vscode.SnippetString("fakemeta ${1:keysym}"),
  },
  keyload: {
    name: "keyload",
    parameters: "filepath",
    documentation: new vscode.MarkdownString(
      "Load the uikeys file located at *filepath*."
    ),
    snippet: new vscode.SnippetString(
      "keyload ${1|luaui/configs/hotkeys/grid_keys.txt,luaui/configs/hotkeys/grid_keys_60pct.txt,luaui/configs/hotkeys/default_keys.txt,luaui/configs/hotkeys/default_keys_60pct.txt|}"
    ),
  },
  keysym: {
    name: "keysym",
    parameters: "name keycode",
    documentation: new vscode.MarkdownString(
      "Register *keysym* as custom key symbol. *name* must start with a letter, and only contain letters, numbers, and underscores. *keycode* can be an existing key symbol. Example: `keysym menu 0x13F` or `keysym radar r`"
    ),
    snippet: new vscode.SnippetString("keysym ${1:name} ${2:keycode}"),
  },
  unbind: {
    name: "unbind",
    parameters: "keyset action",
    documentation: new vscode.MarkdownString(
      "Remove *action* from list of actions for *keyset*. *keyset* must be an exact match (**Any** will not match other modifiers). *action* must be the plain command, without arguments, even if the original **bind** had arguments."
    ),
    snippet: new vscode.SnippetString("unbind ${1:keyset} ${2:action}"),
  },
  unbindaction: {
    name: "unbindaction",
    parameters: "action",
    documentation: new vscode.MarkdownString(
      "Remove all bindings for *action*. *action* must be the plain command, without arguments, even if the original **bind** had arguments."
    ),
    snippet: new vscode.SnippetString("unbindaction ${1:action}"),
  },
  unbindall: {
    name: "unbindall",
    documentation: new vscode.MarkdownString("Remove all bindings."),
  },
  unbindkeyset: {
    name: "unbindkeyset",
    parameters: "keyset",
    documentation: new vscode.MarkdownString(
      "Remove all bindings for *keyset*. *keyset* must be an exact match (**Any** will not match other modifiers)."
    ),
    snippet: new vscode.SnippetString("unbindkeyset ${1:keyset}"),
  },
};

module.exports = commands;
