import { Link } from "react-router";
import { Button } from "../ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-4">🦷</div>
        <h1 className="text-6xl mb-4">{t("notFound.title")}</h1>
        <h2 className="text-2xl mb-4">{t("notFound.heading")}</h2>
        <p className="text-muted-foreground mb-8">
          {t("notFound.message")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              {t("notFound.goHome")}
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("notFound.goBack")}
          </Button>
        </div>
      </div>
    </div>
  );
}
