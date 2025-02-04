import React from "react";

const PDFDownload = () => {
  const handleDownload = () => {
    // Path to the PDF file in the public folder
    const pdfUrl = "../../assets/pdf/criteria.pdf";
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "criteria.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Download PDF
      </button>
    </div>
  );
};

export default PDFDownload;
