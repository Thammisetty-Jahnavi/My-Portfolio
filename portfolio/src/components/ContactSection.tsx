import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "thammisettyjahnavi36@gmail.com",
    href: "mailto:thammisettyjahnavi36@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com",
  },
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const payload = {
        name,
        email,
        message,
        _subject: `Website message from ${name}`,
      };

      const res = await fetch("https://formsubmit.co/ajax/thammisettyjahnavi36@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to send message");
      }

      setSuccess("Message sent — check your inbox.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 text-lg md:text-2xl font-semibold text-accent bg-accent/10 rounded-full">
              Get In Touch
            </span>
          </div>

          {/* Contact Card */}
          <div className="rounded-3xl border border-border bg-card overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground"><Send className="inline-block mr-2 text-accent" size={18} />Thammisetty Jahnavi</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-border rounded-md bg-transparent text-foreground"
                      required
                      disabled={loading}
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-4 py-2 border border-border rounded-md bg-transparent text-foreground"
                      required
                      disabled={loading}
                    />

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-md bg-transparent text-foreground"
                      required
                      disabled={loading}
                    />

                    {success && <p className="text-sm text-green-500">{success}</p>}
                    {error && <p className="text-sm text-destructive">{error}</p>}

                    <div className="flex gap-3">
                      <Button variant="accent" size="lg" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                      <Button variant="ghost" size="lg" onClick={() => { setName(''); setEmail(''); setMessage(''); setSuccess(''); setError(''); }} type="button" disabled={loading}>
                        Clear
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Right - Links */}
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between p-5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <link.icon className="text-accent" size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{link.label}</p>
                          <p className="font-medium text-foreground text-sm">{link.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
