import { Component } from '@angular/core';
import { CertificateViewerComponent } from './components/certificate-viewer/certificate-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CertificateViewerComponent],   // 👈 Important !
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
