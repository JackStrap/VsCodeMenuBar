import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const currentVersion = vscode.extensions.getExtension('JackStrap.jackmenubar')?.packageJSON.version || 'unknown';
	console.log(`Congratulations, your extension is now active! and version is ${currentVersion}`);

	const commandArray: [string, string][] = [
		["extension.save", "workbench.action.files.save"],
		["extension.saveAll", "saveAll"],
		["extension.lineComment", "editor.action.commentLine"],
		["extension.toggleTerminal", "workbench.action.terminal.toggleTerminal"],
		["extension.showCommands", "workbench.action.showCommands"],
	];

	commandArray.forEach(([cmdId, builtinCmd]) => {
		const disposable = vscode.commands.registerCommand(cmdId, () => {
			vscode.commands.executeCommand(builtinCmd);
		});
		context.subscriptions.push(disposable);
	});

	const beautifyDisposable = vscode.commands.registerCommand('extension.beautify', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}
		const formatCommand = editor.selection.isEmpty
			? 'editor.action.formatDocument'
			: 'editor.action.formatSelection';
		vscode.commands.executeCommand(formatCommand);
	});

	context.subscriptions.push(beautifyDisposable);
}

// This method is called when your extension is deactivated

export function deactivate() { }
