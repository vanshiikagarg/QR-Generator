import { FaUser, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#0F6E56]/30 px-8 py-6 flex items-center justify-between text-gray-300 text-sm bg-[#10151B]">
      <div className="flex items-center gap-2">
        <FaUser className="text-[#1D9E75]" />
        <span>Vanshika Garg</span>
      </div>

      <div className="flex items-center gap-2">
        <FaEnvelope className="text-[#1D9E75]" />
        <span>vanshikagarg.555.ag@gmail.com</span>
      </div>
    </footer>
  );
}