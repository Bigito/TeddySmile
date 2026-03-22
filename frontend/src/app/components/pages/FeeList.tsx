import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DollarSign, FileText, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const feeCategoryKeys = [
  {
    titleKey: "fees.checkups",
    items: [
      { nameKey: "fees.initialExam", fee: "—" },
      { nameKey: "fees.regularCheckup", fee: "$85" },
      { nameKey: "fees.cleaning", fee: "$95" },
      { nameKey: "fees.fluoride", fee: "$45" },
    ],
  },
  {
    titleKey: "fees.preventive",
    items: [
      { nameKey: "fees.sealants", fee: "$55" },
      { nameKey: "fees.bitewing", fee: "$75" },
      { nameKey: "fees.fullMouthXray", fee: "$120" },
      { nameKey: "fees.oralHealthEd", fee: "—" },
    ],
  },
  {
    titleKey: "fees.restorative",
    items: [
      { nameKey: "fees.filling1", fee: "$150" },
      { nameKey: "fees.filling2", fee: "$185" },
      { nameKey: "fees.filling3", fee: "$220" },
      { nameKey: "fees.crown", fee: "$350" },
      { nameKey: "fees.pulpTherapy", fee: "$280" },
      { nameKey: "fees.extraction", fee: "$140" },
    ],
  },
  {
    titleKey: "fees.emergency",
    items: [
      { nameKey: "fees.emergencyVisit", fee: "$125" },
      { nameKey: "fees.nitrous", fee: "$65" },
      { nameKey: "fees.mouthguard", fee: "$195" },
      { nameKey: "fees.spaceMaintainer", fee: "$320" },
    ],
  },
];

export function FeeList() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-light via-brand-muted/30 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight mb-6 flex items-center gap-3">
              <FileText className="h-12 w-12 text-primary" />
              {t("fees.title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("fees.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Fee list by category */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {feeCategoryKeys.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden border-brand-muted/30 shadow-sm"
              >
                <CardHeader className="bg-brand-light/50 border-b border-brand-muted/30 py-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    {t(category.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-brand-muted/30">
                    {category.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="text-foreground font-medium">
                          {t(item.nameKey)}
                        </span>
                        <span className="text-primary font-semibold tabular-nums">
                          {item.fee}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="py-16 bg-brand-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-6">
            {t("fees.disclaimer")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t("fees.requestQuote")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">{t("fees.viewServices")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
