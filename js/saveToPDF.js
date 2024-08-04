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

        doc.addFileToVFS("Poppins-Regular.ttf", base64Font);
        doc.addFont("Poppins-Regular.ttf", "Poppins", "normal");
        doc.setFont("Poppins");

        html2canvas(document.body, {scale: 2}).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // ширина A4 в мм
            const pageHeight = 295; // высота A4 в мм
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            // Добавляем изображение в PDF
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Добавляем дополнительные страницы, если необходимо
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            doc.save('download.pdf');
        });
    });
}
