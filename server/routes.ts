import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendContactNotification } from "./utils/email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      await sendContactNotification(submission);
      
      res.status(201).json({
        message: "Contact submission received successfully",
        submission
      });
    } catch (error: any) {
      console.error("Contact submission error:", error);
      res.status(400).json({
        message: "Failed to process contact submission",
        error: error.message
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
