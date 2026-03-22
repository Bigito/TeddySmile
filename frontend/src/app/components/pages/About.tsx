import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Award, Heart, Users, Clock, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Pediatric Dentist & Founder",
      description:
        "Board-certified pediatric dentist with 15+ years of experience making dental visits fun and stress-free.",
      image:
        "https://images.unsplash.com/photo-1653508310895-62141575a3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRlbnRhbCUyMGNoZWNrdXAlMjBmcmllbmRseXxlbnwxfHx8fDE3NzMwNDM4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatric Dentist",
      description:
        "Specializes in treating children with special needs and anxiety management techniques.",
      image:
        "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMwMjA0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Lisa Rodriguez",
      role: "Dental Hygienist",
      description:
        "Certified dental hygienist passionate about teaching children proper oral care habits.",
      image:
        "https://images.unsplash.com/photo-1663182234283-28941e7612da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZGVudGlzdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMDQzODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every child with patience, kindness, and understanding, ensuring a positive experience every visit.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Our team maintains the highest standards of pediatric dental care through continuing education and latest techniques.",
    },
    {
      icon: Users,
      title: "Family-Focused",
      description:
        "We partner with parents to create personalized care plans and build lasting relationships with families.",
    },
    {
      icon: Clock,
      title: "Convenience",
      description:
        "Flexible scheduling, minimal wait times, and efficient appointments that respect your busy family schedule.",
    },
  ];

  const milestones = [
    { year: "2009", event: "Teddy Smile Clinic founded by Dr. Sarah Johnson" },
    { year: "2012", event: "Expanded to a state-of-the-art 5,000 sq ft facility" },
    { year: "2015", event: "Treated our 5,000th patient milestone" },
    { year: "2018", event: "Introduced advanced digital dentistry technology" },
    { year: "2022", event: "Recognized as Best Pediatric Dental Practice in the region" },
    { year: "2026", event: "Continuing to serve our community with excellence" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light via-brand-muted/30 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">{t("about.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">{t("about.missionTitle")}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t("about.missionP1")}
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                {t("about.missionP2")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("about.missionP3")}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMwMjA0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t("about.valuesTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-brand-muted/30">
                  <CardHeader>
                    <div className="mx-auto bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t("about.teamTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.teamSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-brand-muted/30">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t("about.journeyTitle")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("about.journeySubtitle")}
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="bg-white p-6 rounded-lg shadow flex-1 border border-brand-muted/30">
                  <p className="text-lg text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-light to-brand-muted/50 rounded-2xl p-12 border border-brand-muted/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl mb-6">{t("about.visitTitle")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t("about.location")}</p>
                      <p className="text-muted-foreground">123 Smile Street</p>
                      <p className="text-muted-foreground">Happy Town, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t("about.phone")}</p>
                      <a
                        href="tel:+1234567890"
                        className="text-primary hover:underline"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t("about.hours")}</p>
                      <p className="text-muted-foreground">Monday - Friday: 8am - 5pm</p>
                      <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl mb-6">{t("about.scheduleTitle")}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("about.scheduleDesc")}
                </p>
                <Button size="lg" asChild className="w-full md:w-auto">
                  <Link to="/contact">{t("common.bookAppointment")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
