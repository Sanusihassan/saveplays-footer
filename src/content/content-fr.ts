import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "Téléchargeurs",
        links: [
            { href: "/fr/youtube-downloader", label: "YouTube" },
            { href: "/fr/facebook-downloader", label: "Facebook" },
            { href: "/fr/instagram-downloader", label: "Instagram" },
            { href: "/fr/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "Entreprise",
        links: [
            { href: "/about-us", label: "À Propos" },
            { href: "/faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
        ],
    },
    legal: {
        title: "Légal",
        links: [
            { href: "/privacy-policy", label: "Politique de Confidentialité" },
            { href: "/terms-of-service", label: "Conditions d'Utilisation" },
        ],
    },
    language: {
        title: "Langues",
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
