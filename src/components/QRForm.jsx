import { useState } from "react";

export default function QRForm({
  qrType,
  websiteUrl,
  setWebsiteUrl,
  textValue,
  setTextValue,
  fileLink,
  setFileLink,
}) {
  const [touched, setTouched] = useState(false);

  function validURL(str) {
    return /^https?:\/\/.+/.test(str);
  }

  const currentValue =
    qrType === "website" ? websiteUrl :
    qrType === "text" ? textValue :
    fileLink;

  const showEmptyError = touched && currentValue.trim() === "";
  const showInvalidUrlError =
    touched &&
    currentValue.trim() !== "" &&
    (qrType === "website" || qrType === "pdf" || qrType === "image" || qrType === "video") &&
    !validURL(currentValue);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl h-full flex flex-col">

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#0F6E56] text-white w-8 h-8 rounded flex justify-center items-center font-bold">
          1
        </div>

        <h2 className="text-2xl font-bold">
          Complete Content
        </h2>
      </div>

      {qrType === "website" && (
        <>
          <label className="block mb-2 font-semibold">
            Website URL
          </label>

          <input
            type="text"
            placeholder="https://example.com"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            onBlur={() => setTouched(true)}
            className={`w-full border p-4 rounded-xl ${
              showEmptyError || showInvalidUrlError ? "border-red-500" : "border-gray-300"
            }`}
          />
        </>
      )}

      {qrType === "text" && (
        <>
          <label className="block mb-2 font-semibold">
            Enter Text
          </label>

          <textarea
            rows="5"
            placeholder="Type anything..."
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onBlur={() => setTouched(true)}
            className={`w-full border p-4 rounded-xl ${
              showEmptyError ? "border-red-500" : "border-gray-300"
            }`}
          />
        </>
      )}

      {(qrType === "pdf" || qrType === "image" || qrType === "video") && (
        <>
          <label className="block mb-2 font-semibold">
            Paste Link
          </label>

          <input
            type="text"
            placeholder={
              qrType === "pdf"
                ? "https://example.com/file.pdf"
                : qrType === "image"
                ? "https://example.com/image.jpg"
                : "https://example.com/video.mp4"
            }
            value={fileLink}
            onChange={(e) => setFileLink(e.target.value)}
            onBlur={() => setTouched(true)}
            className={`w-full border p-4 rounded-xl ${
              showEmptyError || showInvalidUrlError ? "border-red-500" : "border-gray-300"
            }`}
          />
        </>
      )}

      {showEmptyError && (
        <p className="text-red-500 text-sm mt-2">
          This field can't be empty.
        </p>
      )}

      {showInvalidUrlError && (
        <p className="text-red-500 text-sm mt-2">
          Link must start with http:// or https://
        </p>
      )}

      {/* fills remaining space + gives genuinely useful content */}
      <div className="mt-auto pt-8">
        <div className="bg-[#0F6E56]/5 border border-[#0F6E56]/20 rounded-xl p-4">
          <p className="font-semibold text-sm text-[#0F6E56] mb-2">Tips for a clean QR code</p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Keep website URLs short — long links create denser, harder-to-scan codes</li>
            <li>Test your QR code with your phone camera before sharing it</li>
            <li>Always use http:// or https:// at the start of links</li>
          </ul>
        </div>
      </div>
    </div>
  );
}