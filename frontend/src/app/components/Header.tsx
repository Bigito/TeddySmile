import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", labelKey: "header.home" },
    { path: "/services", labelKey: "header.services" },
    { path: "/about", labelKey: "header.about" },
    { path: "/team", labelKey: "header.team" },
    { path: "/fees", labelKey: "header.fees" },
    { path: "/contact", labelKey: "header.contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const setLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("teddy-lang", lng);
  };

  return (
    <header className="bg-brand-light shadow-md sticky top-0 z-50 border-b border-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Teddy Smile Dental Clinic"
              className="h-12 w-12 rounded-full object-contain shrink-0"
            />
            <div>
              <div className="font-bold text-xl text-foreground">{t("common.clinicName")}</div>
              <div className="text-xs text-muted-foreground">{t("common.clinicTagline")}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Language + CTA - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex rounded-lg border border-brand-muted overflow-hidden">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  i18n.language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("th")}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  i18n.language === "th"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                TH
              </button>
            </div>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(123) 456-7890</span>
            </a>
            <Button asChild>
              <Link to="/contact">{t("common.bookAppointment")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-muted-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-brand-muted">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <div className="flex gap-2 py-2">
                <button
                  type="button"
                  onClick={() => { setLang("en"); setMobileMenuOpen(false); }}
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    i18n.language === "en" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => { setLang("th"); setMobileMenuOpen(false); }}
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    i18n.language === "th" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  ไทย
                </button>
              </div>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground py-2"
              >
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </a>
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t("common.bookAppointment")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
