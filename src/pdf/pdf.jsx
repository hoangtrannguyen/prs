import { useState } from "react";

const pdfFiles = ["1.pdf", "2.pdf", "3.pdf"];

export default function PdfViewer() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Danh sách tệp PDF</h2>
      <ul className="border rounded p-2 bg-gray-100">
        {pdfFiles.map((file, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-200 border-b"
            onClick={() => setSelectedPdf(`/pdf/${file}`)}
          >
            {file}
          </li>
        ))}
      </ul>

      {selectedPdf && (
        <iframe
          src={selectedPdf}
          className="w-full h-[500px] border rounded"
        ></iframe>
      )}
    </div>
  );
}
