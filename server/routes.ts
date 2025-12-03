import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Save to database
      const savedMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      await sendContactEmail(validatedData.name, validatedData.email, validatedData.message);
      
      res.json({ 
        success: true, 
        message: "Your message has been received successfully! We'll get back to you soon.",
        id: savedMessage.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit message. Please try again." 
      });
    }
  });

  // Get all contact messages (for admin view if needed)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
