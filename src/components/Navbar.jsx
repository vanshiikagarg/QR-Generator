import { MdQrCode2 } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#1A2128] border-b border-[#0F6E56]/30">
      <div className="flex items-center gap-3">
        <MdQrCode2 className="text-[#1D9E75] text-3xl" />
        <span className="text-white text-xl font-bold">QR Generator</span>
      </div>

      <a
        href="https://digitalheroesco.com/"
      target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#1D9E75] text-sm font-medium border border-[#1D9E75]/40 rounded-lg px-4 py-2 hover:bg-[#0F6E56]/20 transition"
      >
        Built for Digital Heroes
        <FaExternalLinkAlt className="text-xs" />
      </a>
    </nav>
  );
}