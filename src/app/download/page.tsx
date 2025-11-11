"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { useState } from "react";
import { FaWindows, FaApple, FaAndroid, FaMobileAlt, FaLock, FaDownload } from "react-icons/fa";
import { MdEmail, MdShare } from "react-icons/md";
import  useLenis  from "../lib/useLenis";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function ShareSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      {/* Sidebar container */}
      <div
        className={`bg-white rounded-l-xl shadow-lg transition-all duration-300 ease-in-out ${
          open ? "w-24" : "w-10"
        }`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-30 flex items-center justify-center bg-white rounded-l-xl"
        >
          <div className="flex flex-col gap-3 items-center justify-center">
            <MdShare className="text-blue-600 text-xl mb-1" />
            <span className="text-blue-600 font-semibold text-sm rotate-90">
              Share
            </span>
          </div>
        </button>

        {/* Social Icons */}
        {open && (
          <div className="flex flex-col items-center gap-4 py-6 transition-opacity duration-300">
            <a href="mailto:?subject=Check this out!" target="_blank">
              <MdEmail className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaXTwitter className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DownloadPage() {
  useLenis({ lerp: 0.07 });
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000";
    document.body.style.backgroundColor = "#000";
    document.body.style.margin = "0";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      {/* Infobar */}
      <div className="marquee fixed top-0 left-0 w-full bg-[#4025aa] text-white text-sm h-12 z-50 flex items-center overflow-hidden">
        <p className="inline-block whitespace-nowrap px-4">
          <span className="font-bold">Wipe. Verify. Relax. | Launch Special</span>{" "}
          – Get <span className="font-bold">20% OFF</span> on all premium data-wiping plans! Offer valid till{" "}
          <span className="font-bold">30 Sept.</span>
        </p>
      </div>


      <style jsx>{`
        .marquee { overflow: hidden; }
        .marquee p {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 14s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee:hover p { animation-play-state: paused; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-12 left-0 w-full bg-black/80 border-b border-white/10 px-8 py-4 flex items-center justify-between z-50 backdrop-blur">
        <span className="flex items-center text-white font-bold text-4xl">
          <Image src="/logo.png" alt="Lethe Logo" width={40} height={40} className="mr-2 rounded-full" />
          <Link href="/">Lethe</Link>
        </span>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button
              className="text-white hover:text-indigo-400 transition flex items-center focus:outline-none"
              tabIndex={0}
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-0 min-w-[160px] bg-black border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50 transform translate-y-1">
              <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-t-lg transition">Data Shredding</Link>
              <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 transition">E-Waste Recycling</Link>
              <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-b-lg transition">Secure Pickup</Link>
            </div>
          </div>

          <div className="relative group text-white hover:text-indigo-400 transition">
            <button
              className="text-white hover:text-indigo-400 transition flex items-center focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
            >
              Partners
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full mt-0 w-[420px] bg-black border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50 p-6 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Why partner with us</h4>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Partner Ecosystem</Link>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Alliance Partners</h4>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Technology Alliance</Link>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Become a Partner</h4>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Global Partner Program</Link>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">ITAD Program</Link>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Mobile Processors</Link>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Already a partner?</h4>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Login Portal</Link>
              </div>
            </div>
          </div>

          <Link href="#" className="text-white hover:text-indigo-400 transition">Blog</Link>
          <Link href="/Doc" className="text-white hover:text-indigo-400 transition">Docs</Link>
          <Link href="#" className="text-white hover:text-indigo-400 transition">Contact</Link>
          <Link href="/download" className="ml-4 bg-[#4025aa] text-white font-semibold px-5 py-2 rounded transition">Download</Link>
        </div>
      </nav>

      {/* Page Content - centered card with download buttons */}
      <main className="pt-32 px-6 flex flex-col items-center text-center">
        <div className="w-full max-w-3xl bg-black/60 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-extrabold text-white mb-2">Download Lethe</h1>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Securely wipe your data with <span className="text-blue-400">military-grade encryption</span> and recycle with confidence.
          </p>

          <div className="grid gap-4 sm:grid-cols-4 items-center">
            <a
              href="/downloads/gorecycle-latest-windows.zip"
              download
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
              aria-label="Download for Windows"
            >
              <FaWindows size={20} /> <span>Windows</span>
            </a>

            <a
              href="https://files.catbox.moe/1ortkh.zip"
              download
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
              aria-label="Download for macOS"
            >
              <FaApple size={20} /> <span>macOS</span>
            </a>

            <a
              href="/downloads/gorecycle-latest-ios.zip"
              download
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
              aria-label="Download for iOS"
            >
              <FaMobileAlt size={20} /> <span>iOS</span>
            </a>

            <a
              href="/downloads/gorecycle-latest-linux.zip"
              download
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
              aria-label="Download for Android"
            >
              <FaAndroid size={20} /> <span>Android</span>
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm justify-center items-center">
            <div className="text-gray-400">
              <div>v2.0.1 </div>
              <div className="mt-1">Supported: Windows 10+, macOS 11+, Android 10+</div>
            </div>
            <div className="flex items-center gap-3 text-green-400">
              <FaLock /> <span className="text-green">AES + Serpent + Twofish • DoD 7‑pass wipe</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="/downloads/gorecycle-latest-windows.zip"
              download
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaDownload /> <span>Direct download</span>
            </a>
          </div>
        </div>

        <div className="mt-10 w-full max-w-3xl text-left text-gray-300">
          <h3 className="text-lg text-white mb-3">Notes</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Installer is digitally signed. Verify checksum after download.</li>
            <li>For enterprise deployments, contact us for silent installers and MDM packages.</li>
          </ul>
        </div>
        <Footer />
        <ShareSidebar />
      </main>
    </div>
  );
}