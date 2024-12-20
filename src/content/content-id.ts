import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "Pengunduh",
        links: [
            { href: "/id/youtube-downloader", label: "YouTube" },
            { href: "/id/facebook-downloader", label: "Facebook" },
            { href: "/id/instagram-downloader", label: "Instagram" },
            { href: "/id/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "Perusahaan",
        links: [
            { href: "/about-us", label: "Tentang Kami" },
            { href: "/faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
        ],
    },
    legal: {
        title: "Legal",
        links: [
            { href: "/privacy-policy", label: "Kebijakan Privasi" },
            { href: "/terms-of-service", label: "Syarat dan Ketentuan" },
        ],
    },
    language: {
        title: "Bahasa",
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
