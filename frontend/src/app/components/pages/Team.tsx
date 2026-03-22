import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Award, Sparkles, Stethoscope, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  focus: string[];
};

const team: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatric Dentist & Founder",
    bio: "Board-certified pediatric dentist with 15+ years of experience making dental visits fun and stress-free. Dr. Johnson founded Teddy Smile to create a place where every child leaves with a smile. She is committed to preventive care and helping families build lasting healthy habits.",
    image:
      "https://images.unsplash.com/photo-1653508310895-62141575a3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRlbnRhbCUyMGNoZWNrdXAlMjBmcmllbmRseXxlbnwxfHx8fDE3NzMwNDM4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    focus: ["Preventive care", "Child anxiety", "Parent education"],
  },
  {
    name: "Dr. Michael Chen",
    role: "Pediatric Dentist",
    bio: "Specializes in treating children with special needs and anxiety management techniques. Passionate about making dentistry accessible and comfortable for every family. Dr. Chen uses a gentle, patient-centered approach and stays current with the latest in sedation and trauma care.",
    image:
      "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMwMjA0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    focus: ["Special needs", "Sedation", "Trauma care"],
  },
  {
    name: "Lisa Rodriguez",
    role: "Dental Hygienist",
    bio: "Certified dental hygienist passionate about teaching children proper oral care habits. She loves turning brushing and flossing into a fun routine for kids. Lisa works closely with our dentists to provide cleanings, fluoride treatments, and sealants in a calm, playful environment.",
    image:
      "https://images.unsplash.com/photo-1663182234283-28941e7612da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZGVudGlzdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMDQzODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    focus: ["Cleanings", "Fluoride", "Sealants"],
  },
];

export function Team() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div>
      {/* Draft banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          {t("team.draftBanner")}
        </span>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-light via-brand-muted/30 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight mb-6">{t("team.title")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("team.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Team — 3 in 1 line, clickable */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedMember(member)}
                className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-2xl"
              >
                <Card className="overflow-hidden border-2 border-brand-muted/30 bg-card rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t("common.viewProfile")}
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <CardHeader className="text-center p-6 pb-2">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1" title={member.role}>
                      {member.role}
                    </p>
                    <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                      {member.focus.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-brand-light/80 text-muted-foreground text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full info dialog */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-2xl border-2 border-brand-muted/30">
          {selectedMember && (
            <>
              <div className="aspect-[2/1] max-h-48 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {selectedMember.role}
                  </p>
                  <DialogTitle className="text-2xl font-bold pt-1">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-2">
                  {selectedMember.bio}
                </DialogDescription>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    {t("team.focusAreas")}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {selectedMember.focus.map((item, i) => (
                      <li
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-brand-light text-muted-foreground text-sm font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <DialogFooter className="flex flex-col gap-2 sm:flex-row pt-6">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to="/contact">{t("team.bookAppointment")}</Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedMember(null)}
                    className="w-full sm:w-auto"
                  >
                    {t("team.close")}
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Join / CTA */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t("team.joinTitle")}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("team.joinDesc")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">{t("team.bookAppointment")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">{t("team.aboutLink")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
