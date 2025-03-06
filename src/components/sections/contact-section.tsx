import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { toast, Toaster } from "sonner";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast("Message sent!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                {/* <h3 className="text-2xl font-bold mb-4">Contact Information</h3> */}
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out to me through any of the following channels. I'm always open to discussing new
                  projects, opportunities, or just having a chat.
                </p>
              </div>

              <div className="space-y-4">
                <ContactItem
                  icon={<Mail className="h-6 w-6 text-primary" />}
                  label="Email"
                  link="mailto:hello@example.com"
                  text="k-vishall@giantwavetech.com"
                />
                <ContactItem
                  icon={<Linkedin className="h-6 w-6 text-primary" />}
                  label="LinkedIn"
                  link="https://linkedin.com/in/k-vishall"
                  text="linkedin.com/in/k-vishall"
                />
                <ContactItem
                  icon={<Github className="h-6 w-6 text-primary" />}
                  label="GitHub"
                  link="https://github.com/k-vishall"
                  text="github.com/k-vishall"
                />
                <ContactItem
                  icon={<SiLeetcode className="h-6 w-6 text-primary" />}
                  label="Leetcode"
                  link="https://leetcode.com/u/k-vishall"
                  text="leetcode.com/u/k-vishall"
                />
                <ContactItem
                  icon={<Twitter className="h-6 w-6 text-primary" />}
                  label="Twitter"
                  link="https://twitter.com/k_vishalll"
                  text="twitter.com/k_vishalll"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

// Contact Item Component for better reusability
interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, link, text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
      <div>
        <h4 className="font-medium">{label}</h4>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          {text}
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
