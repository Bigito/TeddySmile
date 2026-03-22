import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Smile,
  Shield,
  Heart,
  Sparkles,
  Star,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

const featureKeys = [
  { title: "home.feature1Title", desc: "home.feature1Desc" },
  { title: "home.feature2Title", desc: "home.feature2Desc" },
  { title: "home.feature3Title", desc: "home.feature3Desc" },
  { title: "home.feature4Title", desc: "home.feature4Desc" },
];

const featureIcons = [Heart, Shield, Sparkles, Award];

const serviceKeys = [
  "home.service1Title",
  "home.service2Title",
  "home.service3Title",
  "home.service4Title",
  "home.service5Title",
  "home.service6Title",
];
const serviceDescKeys = [
  "home.service1Desc",
  "home.service2Desc",
  "home.service3Desc",
  "home.service4Desc",
  "home.service5Desc",
  "home.service6Desc",
];
const serviceIcons = ["🦷", "✨", "🛡️", "🌟", "🚑", "📚"];

export function Home() {
  const { t } = useTranslation();

  const testimonials = [
    { name: "Sarah M.", textKey: "home.testimonial1Text" },
    { name: "James L.", textKey: "home.testimonial2Text" },
    { name: "Emily R.", textKey: "home.testimonial3Text" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light via-brand-muted/30 to-background py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                <span className="block text-foreground">{t("home.heroTitle1")}</span>
                <span className="block text-primary">{t("home.heroTitle2")}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t("home.heroDesc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">{t("common.bookAppointment")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">{t("home.ourServices")}</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">{t("home.statsPatients")}</div>
                </div>
                <div>
                  <div className="text-3xl text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">{t("home.statsYears")}</div>
                </div>
                <div>
                  <div className="text-3xl text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">{t("home.statsSatisfaction")}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663182234283-28941e7612da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZGVudGlzdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMDQzODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy children at dentist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-brand-muted/50">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-light p-3 rounded-full">
                    <Smile className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t("home.kidApproved")}</div>
                    <div className="text-sm text-muted-foreground">{t("home.funGentleCare")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t("home.whyChoose")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.whyChooseDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureKeys.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-brand-muted/30">
                  <CardHeader>
                    <div className="mx-auto bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t(feature.title)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(feature.desc)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t("home.ourServicesTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.ourServicesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-brand-muted/30">
                <CardHeader>
                  <div className="text-4xl mb-2">{serviceIcons[index]}</div>
                  <CardTitle className="text-xl">{t(key)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t(serviceDescKeys[index])}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">{t("home.viewAllServices")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t("home.testimonialsTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.testimonialsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-brand-muted/30">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{t(testimonial.textKey)}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">{t("home.ctaTitle")}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t("home.ctaDesc")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">{t("common.bookAppointment")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="tel:+1234567890">{t("home.callNow")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
