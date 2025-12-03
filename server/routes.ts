import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactEmail } from "./email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission - just sends email, no database needed
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Send email notification
      await sendContactEmail(validatedData.name, validatedData.email, validatedData.message);
      
      res.json({ 
        success: true, 
        message: "Your message has been received successfully! We'll get back to you soon."
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit message. Please try again." 
      });
    }
  });

  return httpServer;
}
