import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Terminal, Send } from "lucide-react";

interface TerminalContactFormProps {
  onSubmit?: (data: any) => void;
}

const TerminalContactForm = ({
  onSubmit = () => {},
}: TerminalContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit(Object.fromEntries(formData));
    setIsSubmitting(false);
  };

  return (
    <Card className="w-[600px] bg-black border-green-500 border-2 p-6 font-mono text-green-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-6">
          <Terminal className="h-5 w-5" />
          <span>Contact Form</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="text-green-500/70">$ enter_name</div>
            <Input
              name="name"
              className="bg-black/50 border-green-500 text-green-500 focus:border-green-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="text-green-500/70">$ enter_email</div>
            <Input
              name="email"
              type="email"
              className="bg-black/50 border-green-500 text-green-500 focus:border-green-400"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="text-green-500/70">$ compose_message</div>
            <Textarea
              name="message"
              className="bg-black/50 border-green-500 text-green-500 focus:border-green-400 min-h-[100px]"
              placeholder="Type your message here..."
              required
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full border-green-500 text-green-500 hover:bg-green-500/100"
            disabled={isSubmitting}
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default TerminalContactForm;
