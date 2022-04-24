import { renderFile } from 'ejs';
import pdf from 'html-pdf';
import fs from 'fs';
import { resolve } from 'path';

const template = resolve(__dirname, 'document.ejs');

const options: any = {
  format: 'A4',
  orientation: 'portrait',
};

export const createPdfDocument = (data: any) => {
  return new Promise((resolve, reject) => {
    renderFile(template, { data }, (err, html) => {
      if (err) reject(err);
      return pdf.create(html, options).toStream((err, stream) => {
        if (err) reject(err);
        stream
          .pipe(fs.createWriteStream('./invoice.pdf'))
          .on('finish', () => {
            resolve('done');
          })
          .on('error', reject);
      });
    });
  });
};
