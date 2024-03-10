import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() modalVisible = false;
  @Output() onClose = new EventEmitter();

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
    this.onClose.emit();
  }
}
