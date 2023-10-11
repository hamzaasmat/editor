import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [
        CommonModule
    ],
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent {


    constructor(
        // public sharedDataService: SharedDataService
    ) { }

    editorContent: string = '';

    applyFormatting(command: string): void {
        document.execCommand(command, false);
    }

    applyHeading(headingLevel: number): void {
        document.execCommand('formatBlock', false, 'h' + headingLevel);
    }

    onTextChanged(event: Event): void {
        const target = event.target as HTMLDivElement;
        this.editorContent = target.innerHTML;
    }
}
