export const content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "Downloaders",
        links: [
            { href: "/youtube-downloader", label: "YouTube" },
            { href: "/facebook-downloader", label: "Facebook" },
            { href: "/instagram-downloader", label: "Instagram" },
            { href: "/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "Company",
        links: [
            { href: "/about-us", label: "About Us" },
            { href: "/faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
        ],
    },
    legal: {
        title: "Legal",
        links: [
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-of-service", label: "Terms of Service" },
        ],
    },
    language: {
        title: "Languages",
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
export type _content = typeof content;