import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  withLink?: boolean;
}

export default function Logo({
  className = "h-10 md:h-12 w-auto object-contain",
  variant = "dark",
  withLink = true,
}: LogoProps) {
  // Real Samyak India Private Limited Ribbon Roll Logo
  const logoSrc =
    variant === "light"
      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDRY-Kuzp_Sz9qwqs3kKhmm0CJTd5SPrWG7hz3k04oyQ7F1h1TXKJiYnLCeD9oqzwYRrWmNuMKkcj6V9Qvh_TGhbVP-UpvBT6JI4RfPYU0uctW-I-USMwLfHNXWi-iL7u5ZPY--zQG5Iok47VePFlrwJDriCCqCZwH8E5ZYCH_MCP5h4N2ccae1eTmXr5ZFbNAKuiFY16X1C8-S3BLEQZ6XSEsWBxYTVpwmijvxYZQE0v5RNODhoNd2ebK2LhtwJPxqPg"
      : "https://lh3.googleusercontent.com/aida-public/AB6AXuBzh_ie15ifU1GYiaC1VBS8HjDHDss1F8IqTfXUVey0JjSHrkQZLAWAXLhhQwxfpKJ0ISyc6gv9oGjqMvi-uZC3LYfOU1wwt2PMHWrgeALnH5WRTrDG8VQo8MRDrfL4peySCInNT3MzyZZVvnna9SiS2ZL2py0iywtY59afvqGthilAWwZtK_2OYG_2UgX6O0XdYwlbzb-ETEyNNIlnCLgWDGtqRCJjkeDOhrAcTAfoDp2JKVT9vsr_bk82WzUc9dd65A";

  const content = (
    <div className="flex items-center gap-2.5 select-none shrink-0">
      <img
        src={logoSrc}
        alt="Samyak India Private Limited Logo"
        className={className}
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = "/images/fallback-label.svg";
        }}
      />
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block transition-transform hover:scale-[1.01] focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
