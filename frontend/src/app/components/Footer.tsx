import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Teddy Smile Dental Clinic"
                className="h-12 w-12 rounded-full object-contain shrink-0"
              />
              <div>
                <div className="font-bold text-lg text-white">{t("common.clinicName")}</div>
                <div className="text-xs text-brand-light">{t("common.clinicTagline")}</div>
              </div>
            </Link>
            <p className="text-sm text-brand-light/90">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-brand-light hover:text-white transition-colors">
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-light hover:text-white transition-colors">
                  {t("header.services")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-light hover:text-white transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-brand-light hover:text-white transition-colors">
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-brand-light hover:text-white transition-colors">
                  {t("footer.feeList")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-light hover:text-white transition-colors">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("footer.ourServices")}</h3>
            <ul className="space-y-2 text-sm text-brand-light">
              <li>{t("footer.preventiveCare")}</li>
              <li>{t("footer.teethCleaning")}</li>
              <li>{t("footer.fluorideTreatments")}</li>
              <li>{t("footer.cavityFillings")}</li>
              <li>{t("footer.emergencyCare")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3 text-sm text-brand-light">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Smile Street, Happy Town, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@teddysmile.com"
                  className="hover:text-white transition-colors"
                >
                  info@teddysmile.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-brand-light hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-light hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-light hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-light/30 mt-8 pt-8 text-sm text-center text-brand-light">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
