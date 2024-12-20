import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "Descargadores",
        links: [
            { href: "/es/youtube-downloader", label: "YouTube" },
            { href: "/es/facebook-downloader", label: "Facebook" },
            { href: "/es/instagram-downloader", label: "Instagram" },
            { href: "/es/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "Compañía",
        links: [
            { href: "/about-us", label: "Sobre Nosotros" },
            { href: "/faq", label: "Preguntas Frecuentes" },
            { href: "/blog", label: "Blog" },
        ],
    },
    legal: {
        title: "Legal",
        links: [
            { href: "/privacy-policy", label: "Política de Privacidad" },
            { href: "/terms-of-service", label: "Términos de Servicio" },
        ],
    },
    language: {
        title: "Idiomas",
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
