import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "डाउनलोडर्स",
        links: [
            { href: "/hi/youtube-downloader", label: "यूट्यूब" },
            { href: "/hi/facebook-downloader", label: "फेसबुक" },
            { href: "/hi/instagram-downloader", label: "इंस्टाग्राम" },
            { href: "/hi/tiktok-downloader", label: "टिकटोक" },
        ],
    },
    company: {
        title: "कंपनी",
        links: [
            { href: "/about-us", label: "हमारे बारे में" },
            { href: "/faq", label: "सामान्य प्रश्न" },
            { href: "/blog", label: "ब्लॉग" },
        ],
    },
    legal: {
        title: "कानूनी",
        links: [
            { href: "/privacy-policy", label: "गोपनीयता नीति" },
            { href: "/terms-of-service", label: "सेवा की शर्तें" },
        ],
    },
    language: {
        title: "भाषाएं",
        languages: [
            { href: "/", label: "English" },
            { href: "/ar", label: "العربية" },
            { href: "/es", label: "Español", className: "latino-type" },
            { href: "/fr", label: "Français", className: "latino-type" },
            { href: "/hi", label: "हिंदी" },
            { href: "/zh", label: "中文" },
            { href: "/bn", label: "বাংলা" },
            { href: "/ru", label: "Русский" },
            { href: "/id", label: "Bahasa Indonesia" },
            { href: "/de", label: "Deutsch" },
        ],
    },
};
