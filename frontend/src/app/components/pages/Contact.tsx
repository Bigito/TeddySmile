import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    age: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success(t("contact.toastSuccess"));
    setFormData({
      parentName: "",
      childName: "",
      email: "",
      phone: "",
      age: "",
      service: "",
      preferredDate: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light via-brand-muted/30 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">{t("contact.title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {t("contact.location")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">123 Smile Street</p>
                  <p className="text-muted-foreground">Happy Town, ST 12345</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    {t("contact.getDirections")}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    {t("contact.phone")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline text-lg"
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Call us during business hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {t("contact.email")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@teddysmile.com"
                    className="text-primary hover:underline"
                  >
                    info@teddysmile.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    {t("contact.officeHours")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contact.requestTitle")}</CardTitle>
                  <CardDescription>
                    {t("contact.requestDesc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="parentName">{t("contact.parentName")}</Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="childName">{t("contact.childName")}</Label>
                        <Input
                          id="childName"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          placeholder="Child's name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.emailAddress")}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contact.phoneNumber")}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age">{t("contact.childAge")}</Label>
                        <Input
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="e.g., 5 years"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">{t("contact.serviceNeeded")}</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="checkup">
                              Regular Checkup & Cleaning
                            </SelectItem>
                            <SelectItem value="first-visit">First Visit</SelectItem>
                            <SelectItem value="fluoride">Fluoride Treatment</SelectItem>
                            <SelectItem value="sealants">Dental Sealants</SelectItem>
                            <SelectItem value="cavity">Cavity Treatment</SelectItem>
                            <SelectItem value="emergency">Emergency Care</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">{t("contact.preferredDate")}</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                      />
                      <p className="text-sm text-muted-foreground">
                        {t("contact.dateNote")}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.additionalInfo")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific concerns or questions?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Calendar className="h-4 w-4 mr-2" />
                      {t("contact.submit")}
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      {t("contact.requiredNote")}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-brand-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 text-foreground">
                    {t("contact.emergencyTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.emergencyDesc")}
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="destructive"
                  className="flex-shrink-0"
                  asChild
                >
                  <a href="tel:+1234567890">
                    <Phone className="h-5 w-5 mr-2" />
                    {t("contact.callEmergency")}: (123) 456-7890
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-brand-muted/40 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map would be embedded here</p>
              <p className="text-sm text-muted-foreground">123 Smile Street, Happy Town, ST 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
