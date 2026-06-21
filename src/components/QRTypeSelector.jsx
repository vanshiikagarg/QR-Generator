import {
  FaGlobe,
  FaFilePdf,
  FaImage,
  FaVideo,
  FaFont
} from "react-icons/fa";

export default function QRTypeSelector({
  qrType,
  setQrType
}) {

  const types = [
    { id: "website", icon: <FaGlobe />, label: "Website" },
    { id: "text", icon: <FaFont />, label: "Text" },
    { id: "pdf", icon: <FaFilePdf />, label: "PDF" },
    { id: "image", icon: <FaImage />, label: "Image" },
    { id: "video", icon: <FaVideo />, label: "Video" },
  ];

  return (
    <div className="bg-white rounded-2xl p-3 shadow">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">

        {types.map((item) => (
          <button
            key={item.id}
            onClick={() => setQrType(item.id)}
            aria-pressed={qrType === item.id}
            className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 cursor-pointer
            ${
              qrType === item.id
                ? "bg-[#0F6E56]/10 border-[#0F6E56] text-[#0F6E56]"
                : "bg-white border-gray-200 text-gray-600 hover:border-[#1D9E75] hover:bg-[#1D9E75]/5 hover:text-[#0F6E56]"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}

      </div>

    </div>
  );
}