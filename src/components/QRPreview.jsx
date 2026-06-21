import QRCode from "react-qr-code";
import { useState } from "react";

export default function QRPreview({ qrType, websiteUrl, textValue, fileLink }) {
  const [downloaded, setDownloaded] = useState(false);

  let qrValue = "";
  if (qrType === "website") qrValue = websiteUrl;
  if (qrType === "text") qrValue = textValue;
  if (qrType === "pdf" || qrType === "image" || qrType === "video") qrValue = fileLink;

  function downloadQR() {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = 300;
      canvas.height = 300;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QR-Code.png";
      downloadLink.href = pngFile;
      downloadLink.click();

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl h-fit">
      <h2 className="text-2xl font-bold mb-6">Download your QR</h2>

      <div className="flex justify-center bg-gray-100 rounded-2xl p-8">
        {qrValue ? (
          <QRCode id="qr-code" value={qrValue} size={220} />
        ) : (
          <div className="w-[220px] h-[220px] flex flex-col items-center justify-center gap-2 text-gray-400 border rounded-xl">
            <span>QR Preview</span>
            <span className="text-xs text-gray-400 px-4 text-center">
              Fill in the content on the left to generate your QR
            </span>
          </div>
        )}
      </div>

      <button
        onClick={downloadQR}
        disabled={!qrValue}
        className={`w-full mt-6 py-3 rounded-xl text-white transition-colors duration-200 ${
          downloaded
            ? "bg-[#1D9E75]"
            : "bg-[#0F6E56] hover:bg-[#1D9E75] disabled:bg-gray-400"
        }`}
      >
        {downloaded ? "Downloaded ✓" : "Download QR"}
      </button>
    </div>
  );
}