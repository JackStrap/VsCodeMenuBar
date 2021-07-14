// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscodemenubar" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	// let disposable = vscode.commands.registerCommand('vscodemenubar.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from vsCodeMenuBar!');
	// });
	// context.subscriptions.push(disposable);

	let disposableCmdsArr: vscode.Disposable[] = [];
	let commandArray = [
		["extension.save", "workbench.action.files.save"],
		["extension.lineComment", "editor.action.commentLine"],
		["extension.blockComment", "editor.action.blockComment"],
		["extension.toggleTerminal", "workbench.action.terminal.toggleTerminal"]
	];

	commandArray.forEach(command => {
		disposableCmdsArr.push(
			vscode.commands.registerCommand(command[0], () => {
				vscode.commands.executeCommand(command[1]).then(function () { });
			})
		);
	});

	let disposableBeautify = vscode.commands.registerCommand('extension.beautify', () => {

		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}

		if (vscode.window.state.focused === true && !editor.selection.isEmpty) {
			vscode.commands.executeCommand('editor.action.formatSelection').then(function () { });
		} else {
			vscode.commands.executeCommand('editor.action.formatDocument').then(function () { });
		}
	});

	// Add to a list of disposables which are disposed when this extension is deactivated.
	context.subscriptions.push(disposableBeautify);
	disposableCmdsArr.forEach(i => {
		context.subscriptions.push(i);
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
