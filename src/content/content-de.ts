import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "Downloader",
        links: [
            { href: "/de/youtube-downloader", label: "YouTube" },
            { href: "/de/facebook-downloader", label: "Facebook" },
            { href: "/de/instagram-downloader", label: "Instagram" },
            { href: "/de/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "Unternehmen",
        links: [
            { href: "/about-us", label: "Über Uns" },
            { href: "/faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
        ],
    },
    legal: {
        title: "Rechtliches",
        links: [
            { href: "/privacy-policy", label: "Datenschutzrichtlinie" },
            { href: "/terms-of-service", label: "Nutzungsbedingungen" },
        ],
    },
    language: {
        title: "Sprachen",
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
