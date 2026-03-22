import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import {
  Shield,
  Sparkles,
  Activity,
  AlertCircle,
  GraduationCap,
  Baby,
  Circle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular checkups and cleanings to keep teeth healthy",
      color: "from-primary to-primary/90",
      details: [
        "Comprehensive oral examinations",
        "Professional teeth cleaning",
        "X-rays and diagnostic imaging",
        "Early detection of potential issues",
        "Personalized prevention plans",
      ],
    },
    {
      icon: Sparkles,
      title: "Fluoride Treatments",
      description: "Strengthen enamel and prevent cavities",
      color: "from-primary to-primary/90",
      details: [
        "Quick and painless application",
        "Strengthens tooth enamel",
        "Reduces cavity risk by up to 40%",
        "Safe for all ages",
        "Various flavors available for kids",
      ],
    },
    {
      icon: Circle,
      title: "Dental Sealants",
      description: "Protective coating for molars and premolars",
      color: "from-brand-muted to-primary",
      details: [
        "Shields chewing surfaces from decay",
        "Non-invasive procedure",
        "Lasts several years",
        "Ideal for children and teens",
        "Reduces cavity risk significantly",
      ],
    },
    {
      icon: Activity,
      title: "Restorative Care",
      description: "Gentle treatment for cavities and damaged teeth",
      color: "from-primary to-primary/90",
      details: [
        "Tooth-colored fillings",
        "Gentle cavity treatment",
        "Crown placement for damaged teeth",
        "Pain-free procedures",
        "Same-day appointments available",
      ],
    },
    {
      icon: AlertCircle,
      title: "Emergency Dental Care",
      description: "Same-day treatment for dental emergencies",
      color: "from-primary to-primary/90",
      details: [
        "Immediate pain relief",
        "Treatment for knocked-out teeth",
        "Management of dental trauma",
        "Same-day emergency slots",
        "After-hours emergency line",
      ],
    },
    {
      icon: GraduationCap,
      title: "Dental Education",
      description: "Teaching kids healthy oral hygiene habits",
      color: "from-brand-muted to-primary",
      details: [
        "Proper brushing techniques",
        "Flossing demonstrations",
        "Nutrition counseling",
        "Habit counseling (thumb sucking, etc.)",
        "Interactive learning activities",
      ],
    },
    {
      icon: Baby,
      title: "Infant Oral Care",
      description: "Specialized care for babies and toddlers",
      color: "from-brand-muted to-primary",
      details: [
        "First dental visit guidance",
        "Teething support and advice",
        "Early childhood caries prevention",
        "Bottle feeding counseling",
        "Developmental monitoring",
      ],
    },
  ];

  const faqs = [
    {
      question: "When should my child have their first dental visit?",
      answer:
        "We recommend scheduling your child's first dental visit by their first birthday or within 6 months of their first tooth erupting. Early visits help establish good oral health habits and allow us to detect any potential issues early.",
    },
    {
      question: "How often should children visit the dentist?",
      answer:
        "Most children should visit the dentist every 6 months for regular checkups and cleanings. However, some children may need more frequent visits based on their individual oral health needs.",
    },
    {
      question: "Are dental X-rays safe for children?",
      answer:
        "Yes, dental X-rays are very safe for children. We use the latest digital X-ray technology which significantly reduces radiation exposure. We only take X-rays when medically necessary to ensure proper diagnosis and treatment.",
    },
    {
      question: "Do you offer sedation options for anxious children?",
      answer:
        "Yes, we offer several sedation options including nitrous oxide (laughing gas) for children who experience dental anxiety. Our team is trained to make every visit as comfortable and stress-free as possible.",
    },
    {
      question: "What should I do if my child has a dental emergency?",
      answer:
        "Call our office immediately. We reserve same-day emergency slots and have an after-hours emergency line. For knocked-out permanent teeth, try to place it back in the socket or keep it in milk until you reach our office.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light via-brand-muted/30 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">{t("services.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">{t("services.faqTitle")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("services.faqSubtitle")}
            </p>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow border border-brand-muted/30">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">{t("services.ctaTitle")}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t("services.ctaDesc")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">{t("services.bookAppointment")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="tel:+1234567890">{t("services.call")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}