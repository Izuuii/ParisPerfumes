import { site } from "../data/site";
import logoUrl from "../assets/logo";
import { IconMail, IconPhone, IconPin } from "./icons";

export default function TopBar() {
  return (
    <div className="hidden bg-[#BA0776] text-cream/90 lg:block">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-2 text-xs">
        <div className="flex items-center gap-4">
          <a href="#inicio" className="flex items-center" aria-label="Paris Perfumes">
            <img
              src={logoUrl}
              alt="Paris Perfumes"
              className="h-8 w-auto"
            />
          </a>
          <span className="inline-flex items-center gap-2">
            <IconPin className="h-4 w-4 text-cream" />
            <span className="truncate">{site.contact.address}</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <IconMail className="h-4 w-4 text-cream" />
            {site.contact.email}
          </a>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <IconPhone className="h-4 w-4 text-cream" />
            {site.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
