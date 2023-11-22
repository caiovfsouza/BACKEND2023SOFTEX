const readlineSync = require('readline-sync');

// Classe Observável: Editor
class Editor {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(event: string): void {
        this.observers.forEach(observer => observer.update(event));
    }
}

// Interface Observador: Observer
interface Observer {
    update(event: string): void;
}

// Subclasse de Editor: TextEditor
class TextEditor extends Editor {
    private lines: string[] = [];

    insertLine(lineNumber: number, text: string): void {
        if (lineNumber >= 0 && lineNumber <= this.lines.length) {
            this.lines.splice(lineNumber, 0, text);
            this.notify("insertLine");
        } else {
            console.log("Número de linha inválido.");
        }
    }

    removeLine(lineNumber: number): void {
        if (lineNumber >= 0 && lineNumber < this.lines.length) {
            this.lines.splice(lineNumber, 1);
            this.notify("removeLine");
        } else {
            console.log("Número de linha inválido.");
        }
    }

    saveToFile(): void {
        // Simula a lógica de salvar em um arquivo
        console.log("Conteúdo salvo no arquivo.");
    }

    printContent(): void {
        console.log("Conteúdo do arquivo:");
        console.log(this.lines.join("\n"));
    }
}

// Observador Concreto: TextEditorObserver
class TextEditorObserver implements Observer {
    private textEditor: TextEditor;

    constructor(textEditor: TextEditor) {
        this.textEditor = textEditor;
    }

    update(event: string): void {
        if (event === "insertLine" || event === "removeLine") {
            this.textEditor.printContent();
        }
    }
}

// Uso do TextEditor
const textEditor = new TextEditor();
const observer = new TextEditorObserver(textEditor);
textEditor.addObserver(observer);

console.log("Digite as linhas de texto. Digite 'EOF' para encerrar.");

let lineNumber = 0;
let userInput = "";

while ((userInput = readlineSync.question()) !== "EOF") {
    textEditor.insertLine(lineNumber, userInput);
    lineNumber++;
}

textEditor.saveToFile();
