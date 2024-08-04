import jsPDF from 'jspdf';
import {base64Font} from './font/base64.js'

export const submitForm = () => {
    const downloadButton = document.getElementById('download-pdf');

    downloadButton.addEventListener('click', () => {

        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });
        console.log('doc.internal.pageSize.getWidth() ', doc.internal.pageSize.getWidth())

        doc.addFileToVFS("Poppins-Regular.ttf", base64Font);
        doc.addFont("Poppins-Regular.ttf", "Poppins", "normal");

        doc.setFont("Poppins");

        doc.html(document.body, {
            callback: (doc) => {

                // doc.setFont("Emoji");
                // doc.text("👋🏻", 10, 50);


                // doc.addImage(emojiBase64, 'PNG', 10, 10, 30, 30);
                doc.save('download.pdf');
            },
            x: 10,
            y: 10,
            width: doc.internal.pageSize.getWidth() - 20,
            windowWidth: document.body.scrollWidth,
        });
    });
}