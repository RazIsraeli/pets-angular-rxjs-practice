import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  @Output() closeModal = new EventEmitter();

  onCloseModal() {
    this.closeModal.emit(true);
  }
}
