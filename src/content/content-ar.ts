import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "برامج التنزيل",
        links: [
            { href: "/ar/youtube-downloader", label: "يوتيوب" },
            { href: "/ar/facebook-downloader", label: "فيسبوك" },
            { href: "/ar/instagram-downloader", label: "إنستغرام" },
            { href: "/ar/tiktok-downloader", label: "تيك توك" },
        ],
    },
    company: {
        title: "الشركة",
        links: [
            { href: "/about-us", label: "معلومات عنا" },
            { href: "/faq", label: "الأسئلة الشائعة" },
            { href: "/blog", label: "المدونة" },
        ],
    },
    legal: {
        title: "قانوني",
        links: [
            { href: "/privacy-policy", label: "سياسة الخصوصية" },
            { href: "/terms-of-service", label: "شروط الخدمة" },
        ],
    },
    language: {
        title: "اللغات",
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
