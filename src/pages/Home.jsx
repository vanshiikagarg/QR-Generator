import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QRTypeSelector from "../components/QRTypeSelector";
import QRForm from "../components/QRForm";
import QRPreview from "../components/QRPreview";
import Footer from "../components/Footer";

export default function Home() {
  const [qrType, setQrType] = useState("website");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [textValue, setTextValue] = useState("");
  const [fileLink, setFileLink] = useState("");

  return (
    <div className="min-h-screen bg-[#10151B] relative overflow-hidden">

      {/* decorative glow blobs to fill empty space on wide screens */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-[#0F6E56]/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 bg-[#1D9E75]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <div className="max-w-[1400px] mx-auto px-6 py-10">

          <QRTypeSelector
            qrType={qrType}
            setQrType={setQrType}
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-8 items-stretch">

            <div className="lg:col-span-2 h-full">
              <QRForm
                qrType={qrType}
                websiteUrl={websiteUrl}
                setWebsiteUrl={setWebsiteUrl}
                textValue={textValue}
                setTextValue={setTextValue}
                fileLink={fileLink}
                setFileLink={setFileLink}
              />
            </div>

            <div className="h-full">
              <QRPreview
                qrType={qrType}
                websiteUrl={websiteUrl}
                textValue={textValue}
                fileLink={fileLink}
              />
            </div>

          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}