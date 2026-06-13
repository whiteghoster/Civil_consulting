import mongoose, { Schema, model, models } from "mongoose";

// Contact Form
const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: String,
  city: String,
  service: String,
  budget: String,
  message: { type: String, required: true },
  ip: String,
  createdAt: { type: Date, default: Date.now },
});

// Career Applications
const careerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resumeUrl: String,
  experience: String,
  position: { type: String, required: true },
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Newsletter
const newsletterSchema = new Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = models.Contact || model("Contact", contactSchema);
export const CareerApplication = models.CareerApplication || model("CareerApplication", careerSchema);
export const Newsletter = models.Newsletter || model("Newsletter", newsletterSchema);
