"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Users, TrendingUp, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import SuccessMessage from "@/components/ui/SuccessMessage";

export default function PartnerJoinPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    description: "",
    location: "",
    priceRange: "",
    contactEmail: "",
  });

  const categoryPriceMap: Record<string, string[]> = {
    "Travel Agency": ["$100 - $500", "$500 - $1000"],
    "Tour Operator": ["$50 - $200", "$200 - $500"],
    "Accommodation / Hotels": ["$50 - $150", "$150 - $300", "$300+"],
    "Transportation / Car Rentals": ["$20 - $100", "$100 - $300"],
    "Event Organizer": ["$100 - $500", "$500+"],
    "Food & Beverage": ["$10 - $50", "$50 - $150"],
    "Nightlife / Entertainment": ["$20 - $100", "$100 - $300"],
    "Cultural Experiences": ["$20 - $100", "$100 - $250"],
    "Photography / Media": ["$50 - $200", "$200 - $500"],
    "Shopping / Local Markets": ["$5 - $50", "$50 - $150"],
    "Wellness & Spa": ["$30 - $150", "$150 - $300"],
    "Other": ["$10 - $500+"],
  };

  const [priceOptions, setPriceOptions] = useState<string[]>([]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.priceRange.trim()) newErrors.priceRange = "Price range is required.";
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "Contact email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Invalid email address.";
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "category") {
      if (categoryPriceMap[value]) {
        setPriceOptions(categoryPriceMap[value]);
        setFormData((prev) => ({ ...prev, priceRange: "" }));
      } else {
        setPriceOptions([]);
        setFormData((prev) => ({ ...prev, priceRange: "" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Netlify will handle the submission
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-24 px-4 mt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With TravApp</h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
          Join the next wave of trusted local providers, from tour guides to restaurants, events, and chauffeurs.
        </p>
      </section>

      <section className="py-16 px-4 bg-primary/10 border-y border-primary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reach More Travelers</h3>
            <p className="text-zinc-400">Get discovered by thousands of travelers planning trips to Ghana and Nigeria.</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
            <p className="text-zinc-400">Increase bookings and brand awareness with zero upfront marketing costs.</p>
          </div>
          <div className="flex flex-col items-center">
            <DollarSign className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Upfront Cost</h3>
            <p className="text-zinc-400">List your services for free. Pay only a small commission on confirmed bookings.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        {submitted ? (
          <div className="max-w-xl mx-auto">
            <SuccessMessage message="Thank you! Your submission has been received." />
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply to Partner</h2>
            <p className="text-zinc-400 mb-8">Fill out the form below to get started.</p>
            <form
              name="partner"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto text-left"
            >
              <input type="hidden" name="form-name" value="partner" />

              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="businessName">Business Name</label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
                {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select category</option>
                  <option>Travel Agency</option>
                  <option>Tour Operator</option>
                  <option>Accommodation / Hotels</option>
                  <option>Transportation / Car Rentals</option>
                  <option>Event Organizer</option>
                  <option>Food & Beverage</option>
                  <option>Nightlife / Entertainment</option>
                  <option>Cultural Experiences</option>
                  <option>Photography / Media</option>
                  <option>Shopping / Local Markets</option>
                  <option>Wellness & Spa</option>
                  <option>Other</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-black"
                  rows={4}
                  required
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="location">Location</label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="priceRange">Price Range</label>
                <select
                  id="priceRange"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select price range</option>
                  {priceOptions.map((price) => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
                {errors.priceRange && <p className="text-red-500 text-sm">{errors.priceRange}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="contactEmail">Contact Email</label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
                {errors.contactEmail && <p className="text-red-500 text-sm">{errors.contactEmail}</p>}
              </div>

              <Button type="submit" className="w-full mt-4">Submit</Button>
            </form>
          </>
        )}
      </section>

      <section className="py-8 px-4 text-center border-t border-zinc-800">
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Submissions are reviewed manually. Only vetted local providers will be listed.
        </p>
      </section>

      <Footer />
    </main>
  );
}
