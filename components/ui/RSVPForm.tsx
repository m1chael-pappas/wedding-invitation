"use client";

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Guest {
  name: string;
  dietary: string;
}

const RSVPForm: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([{ name: "", dietary: "" }]);
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const addGuest = (): void => {
    setGuests([...guests, { name: "", dietary: "" }]);
  };

  const updateGuest = (
    index: number,
    field: keyof Guest,
    value: string
  ): void => {
    const updatedGuests = [...guests];
    updatedGuests[index] = { ...updatedGuests[index], [field]: value };
    setGuests(updatedGuests);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the email body
    const guestDetails = guests
      .map(
        (guest, idx) =>
          `Guest ${idx + 1}: ${guest.name} ${
            guest.dietary ? `(${guest.dietary})` : ""
          }`
      )
      .join("\n");

    const emailSubject = `RSVP for Wedding - ${guests[0].name}`;
    const emailBody = `
RSVP Details:
${guestDetails}

Message:
${message || "No message provided."}
    `;

    // Create mailto link
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open the email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      setGuests([{ name: "", dietary: "" }]);
      setMessage("");
    }, 1000);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="px-16 py-6 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full text-xl">
          RSVP
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-0 bg-white rounded-lg">
        <div className="p-6">
          <DialogHeader className="mb-4 relative">
            <DialogTitle className="text-center text-xl font-medium">
              RSVP
            </DialogTitle>
          </DialogHeader>

          <div className="border-t border-b py-4 my-4 text-center">
            <p className="font-medium">Friday, 20th February 2026 at 6:00 PM</p>
            <p>Lauriston House, Sydney</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {guests.map((guest, index) => (
              <div key={index} className="space-y-4">
                <div>
                  {index === 0 && (
                    <label className="block mb-2 text-sm font-medium">
                      *Please provide your full name
                    </label>
                  )}
                  <Input
                    placeholder="Full name"
                    value={guest.name}
                    onChange={(e) => updateGuest(index, "name", e.target.value)}
                    required={index === 0}
                    className="rounded-full border-gray-200"
                  />
                </div>

                <div>
                  {index === 0 && (
                    <label className="block mb-2 text-sm font-medium">
                      Dietary preference or restrictions
                    </label>
                  )}
                  <Input
                    placeholder="Dietary preferences"
                    value={guest.dietary}
                    onChange={(e) =>
                      updateGuest(index, "dietary", e.target.value)
                    }
                    className="rounded-full border-gray-200"
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Message or wish for the couple
              </label>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-gray-200 min-h-24 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <Button
                type="button"
                onClick={addGuest}
                variant="outline"
                className="rounded-full border-pink-200 text-gray-700 hover:bg-pink-50"
              >
                Add guest
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-pink-200 hover:bg-pink-300 text-gray-800"
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPForm;
