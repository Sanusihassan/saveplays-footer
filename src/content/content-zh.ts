import type { _content } from "./content";
export const content: _content = {
    brandName: "saveplays.com",
    downloaders: {
        title: "下载器",
        links: [
            { href: "/zh/youtube-downloader", label: "YouTube" },
            { href: "/zh/facebook-downloader", label: "Facebook" },
            { href: "/zh/instagram-downloader", label: "Instagram" },
            { href: "/zh/tiktok-downloader", label: "TikTok" },
        ],
    },
    company: {
        title: "公司",
        links: [
            { href: "/about-us", label: "关于我们" },
            { href: "/faq", label: "常见问题" },
            { href: "/blog", label: "博客" },
        ],
    },
    legal: {
        title: "法律",
        links: [
            { href: "/privacy-policy", label: "隐私政策" },
            { href: "/terms-of-service", label: "服务条款" },
        ],
    },
    language: {
        title: "语言",
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
