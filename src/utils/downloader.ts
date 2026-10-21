import JSZip from 'jszip';
import { STARTER_FILES } from '../data/starterFiles';

export function downloadFile(filename: string, content: string, mimeType = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

export function downloadSpecificFile(fileKey: string) {
  const content = STARTER_FILES[fileKey];
  if (!content) return;
  downloadFile(fileKey, content);
}

export async function downloadStarterZip() {
  const zip = new JSZip();
  for (const [filename, content] of Object.entries(STARTER_FILES)) {
    zip.file(filename, content);
  }
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'telegram-bot-starter.zip';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}
