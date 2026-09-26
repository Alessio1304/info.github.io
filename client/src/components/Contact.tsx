import { useState, useEffect, useRef, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  X,
  Linkedin,
  Instagram,
  Facebook,
  Github,
} from "lucide-react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation } from "react-i18next";

// --- Componente Helper per l'animazione allo scroll ---
const RevealOnScroll = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <ScrollReveal delay={delay / 1000} className={className}>
      {children}
    </ScrollReveal>
  );
};
// --------------------------------------------------------

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  subject: z.string().min(5, "L'oggetto deve contenere almeno 5 caratteri"),
  message: z
    .string()
    .min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // GitHub Pages is static, so we'll simulate form submission
      // In a real app with a backend, you'd send this data to your server or a form service like Formspree
      console.log("Form data:", data);

      // Simulate a successful submission after a short delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: t("contact.form.successTitle"),
        description: t("contact.form.successDesc"),
      });
      form.reset();
    } catch (error) {
      toast({
        title: t("contact.form.errorTitle"),
        description: t("contact.form.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
            <div className="h-1 w-20 bg-blue-900 dark:bg-blue-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <RevealOnScroll delay={100}>
              <Card>
                <CardContent className="p-6">
                  <RevealOnScroll delay={150}>
                    <h3 className="text-xl font-semibold mb-6">
                      {t("contact.contactInfo")}
                    </h3>
                  </RevealOnScroll>

                  <div className="space-y-6">
                    <RevealOnScroll delay={250}>
                      <div className="flex items-start">
                        <div className="bg-blue-900/10 dark:bg-blue-400/20 p-3 rounded-md text-blue-900 dark:text-blue-400 mr-4 transition-colors">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">{t("contact.location")}</h4>
                          <p className="text-muted-foreground">
                            Turin & Rome
                          </p>
                        </div>
                      </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={350}>
                      <div className="flex items-start">
                        <div className="bg-blue-900/10 dark:bg-blue-400/20 p-3 rounded-md text-blue-900 dark:text-blue-400 mr-4 transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">Email</h4>
                          <p className="text-muted-foreground">
                            alessio.sor.1304@icloud.com
                          </p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>

                  <RevealOnScroll delay={550}>
                    <div className="mt-8">
                      <h4 className="text-base font-medium mb-4">
                        {t("contact.social")}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://www.instagram.com/alessio_sorrentino_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300 transform hover:scale-110"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a
                          href="https://it.linkedin.com/in/alessio-sorrentino-005b43274?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all duration-300 transform hover:scale-110"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                          href="https://x.com/Alessio83463385"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200 hover:text-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-110"
                          aria-label="X"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                            alt="X logo"
                            className="h-6 w-6 dark:invert"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/alessio.sorrentino.370"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-110"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a
                          href="https://github.com/Alessio1304"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                          aria-label="GitHub"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      </div>

                      <div className="mt-6 p-4 bg-blue-900/5 dark:bg-blue-400/10 rounded-lg border border-blue-900/10 dark:border-blue-400/20 transition-colors">
                        <p className="text-sm text-muted-foreground">
                          {t("contact.socialText")}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
