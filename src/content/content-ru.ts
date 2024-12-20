import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "Загрузчики",
        links: [
            { href: "/ru/youtube-downloader", label: "YouTube" },
            { href: "/ru/facebook-downloader", label: "Facebook" },
            { href: "/ru/instagram-downloader", label: "Instagram" },
            { href: "/ru/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "Компания",
        links: [
            { href: "/about-us", label: "О нас" },
            { href: "/faq", label: "Часто задаваемые вопросы" },
            { href: "/blog", label: "Блог" },
        ],
    },
    legal: {
        title: "Правовая информация",
        links: [
            { href: "/privacy-policy", label: "Политика конфиденциальности" },
            { href: "/terms-of-service", label: "Условия предоставления услуг" },
        ],
    },
    language: {
        title: "Языки",
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
