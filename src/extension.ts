// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tmpdev" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposableCmdsArr: vscode.Disposable[] = [];
	const commandArray = [
		["extension.save", "workbench.action.files.save"],
		["extension.saveAll", "saveAll"],
		["extension.lineComment", "editor.action.commentLine"],
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

	context.subscriptions.push(disposableBeautify);
	disposableCmdsArr.forEach(i => {
		context.subscriptions.push(i);
	});
	// const disposable = vscode.commands.registerCommand('tmpdev.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from tmpDev!');
	// });

	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
