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
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const addGuest = (): void => {
    if (guests.length < 2) {
      setGuests([...guests, { name: "", dietary: "" }]);
    }
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

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guests, message }),
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Server error");
      }

      // Show success message
      setSubmitStatus("Thank you for your RSVP!");

      // Reset form fields only, but keep the dialog open with the success message
      setGuests([{ name: "", dietary: "" }]);
      setMessage("");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitStatus(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="px-16 py-6 bg-[#f3bdaf] hover:bg-[#f3bdaf] text-gray-800 rounded-full text-xl">
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

          {submitStatus ? (
            <div className="py-10 text-center">
              <p className="text-xl font-medium text-green-600">
                {submitStatus}
              </p>
              <p className="mt-4 text-gray-600">
                We look forward to celebrating with you!
              </p>
              <Button
                onClick={() => {
                  setIsDialogOpen(false);
                  setSubmitStatus("");
                }}
                className="mt-6 rounded-full bg-[#f3bdaf] hover:bg-[#f3bdaf] text-gray-800"
              >
                Close
              </Button>
            </div>
          ) : (
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
                      onChange={(e) =>
                        updateGuest(index, "name", e.target.value)
                      }
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
                {guests.length < 2 && (
                  <Button
                    type="button"
                    onClick={addGuest}
                    variant="outline"
                    className="rounded-full border-[#f3bdaf] text-gray-700 hover:bg-pink-50"
                  >
                    Add +1 guest
                  </Button>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#f3bdaf] hover:bg-[#f3bdaf] text-gray-800"
                >
                  {isSubmitting ? "Submitting..." : "Submit RSVP"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPForm;
