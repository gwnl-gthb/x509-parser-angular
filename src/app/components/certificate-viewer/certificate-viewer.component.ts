import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { loadX509FromBufferSync, simplifyX509Certificate, SimplifiedX509Certificate } from 'x509-parser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-certificate-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './certificate-viewer.component.html',
  styleUrls: ['./certificate-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertificateViewerComponent {
  certificate?: SimplifiedX509Certificate;

  /*
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.parseCertificate(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.parseCertificate(file);
    }
  }
  */

  private async parseCertificate(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const cert = loadX509FromBufferSync(new Uint8Array(arrayBuffer));
    this.certificate = simplifyX509Certificate(cert);
  }

  getExtensionIcon(label: string): string {
    if (!label) return 'extension';
    const lower = label.toLowerCase();
    if (lower.includes('key')) return 'vpn_key';
    if (lower.includes('issuer')) return 'account_balance';
    if (lower.includes('subject')) return 'person';
    if (lower.includes('san') || lower.includes('altname')) return 'language';
    if (lower.includes('policy')) return 'gavel';
    if (lower.includes('distribution')) return 'cloud_download';
    if (lower.includes('transparency')) return 'visibility';
    return 'extension';
  }

  dragging = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = false;

    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.readCertificate(file);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.readCertificate(file);
    }
  }

  private async readCertificate(file: File) {
    const buffer = await file.arrayBuffer();
    const x509 = loadX509FromBufferSync(new Uint8Array(buffer));
    this.certificate = simplifyX509Certificate(x509);
  }


}
