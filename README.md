# vscodemenubar README

A sort of toolbar for Visual Studio Code.
<br />
It's base on [JerryGoyal project](https://github.com/JerryGoyal/Shortcut-Menu-Bar-VSCode-Extension), thanks Jerry!

## Features

Show buttons like beautify, save, toggle comment, toggle terminal etc to the editor menu bar in the Visual Studio Code.

For example:

![vscodemenubar](./images/vsCodeMenuBar.png)

## Requirements

> * `npm install -g generator-code`  
> * `npm install -g @vscode/vsce`

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

> Build / Compile
> * `npm run compile`
> * `vsce package`
> * `code --install-extension somemenubar-0.0.1.vsix`
---
<br/>

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

### 0.0.7
add Save All button

### 0.0.3
rename in code

### 0.0.2
remove item from menu bar

### 0.0.1

Initial release of someMenuBar

---
<br/>

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

      {
        "command": "extension.beautify",
        "title": "Beautify",
        "category": "menubar",
        "icon": {
          "light": "images/format_light.svg",
          "dark": "images/format.svg"
        }
      },
      {
        "command": "extension.beautify",
        "title": "Beautify",
        "category": "menubar",
        "icon": "$(bracket)"
      },

      {
        "command": "extension.toggleTerminal",
        "title": "Toggle terminal",
        "category": "menubar",
        "icon": {
          "light": "images/terminal_light.svg",
          "dark": "images/terminal.svg"
        }
      }
terminal-powershell
