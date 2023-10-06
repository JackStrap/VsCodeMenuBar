// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Some Menu Bar" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposableCmdsArr: vscode.Disposable[] = [];
	const commandArray = [
		["extension.save", "workbench.action.files.save"],
		["extension.saveAll", "saveAll"],
		["extension.lineComment", "editor.action.commentLine"],
		["extension.blockComment", "editor.action.blockComment"],
		["extension.toggleTerminal", "workbench.action.terminal.toggleTerminal"]
	];

	commandArray.forEach(command => {
		disposableCmdsArr.push(
			vscode.commands.registerCommand(command[0], () => {
				vscode.commands.executeCommand(command[1]).then(() => { });
			})
		);
	});

	const disposableBeautify = vscode.commands.registerCommand('extension.beautify', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}

		if (vscode.window.state.focused === true && !editor.selection.isEmpty) {
			vscode.commands.executeCommand('editor.action.formatSelection').then(() => { });
		}
		else {
			vscode.commands.executeCommand('editor.action.formatDocument').then(() => { });
		}
	});

	// Add to a list of disposables which are disposed when this extension is deactivated.
	context.subscriptions.push(disposableBeautify);

	disposableCmdsArr.forEach(i => {
		context.subscriptions.push(i);
	});
}

// this method is called when your extension is deactivated
export function deactivate() { }
