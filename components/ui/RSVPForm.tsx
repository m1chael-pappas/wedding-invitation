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
import { getFontClass } from '@/lib/utils';

interface Guest {
  name: string;
  dietary: string;
}

interface RSVPTranslations {
  button: string;
  modalTitle: string;
  eventDetails: string;
  venue: string;
  guestLabel: string;
  fullNamePlaceholder: string;
  dietaryPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  addGuestButton: string;
  submitButton: string;
  submittingButton: string;
  successMessage: string;
  successSubMessage: string;
  errorMessage: string;
  closeButton: string;
}

interface RSVPFormProps {
  translations: RSVPTranslations;
  language?: string;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ translations, language }) => {
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

      setSubmitStatus("success");

      setGuests([{ name: "", dietary: "" }]);
      setMessage("");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  console.log("language", language);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className={`px-16 py-6 bg-[#f3bdaf] hover:bg-[#f3bdaf] text-gray-800 rounded-full text-xl ${getFontClass(
            language ?? "en",
            "font-lustria"
          )}`}
        >
          {translations.button}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-0 bg-white rounded-lg">
        <div className="p-6">
          <DialogHeader className="mb-4 relative">
            <DialogTitle
              className={`text-center text-xl font-medium ${getFontClass(
                language ?? "en",
                "font-lustria"
              )}`}
            >
              {translations.modalTitle}
            </DialogTitle>
          </DialogHeader>

          <div
            className={`border-t border-b py-4 my-4 text-center ${getFontClass(
              language ?? "en",
              "font-lustria"
            )}`}
          >
            <p
              className={`font-medium ${getFontClass(
                language ?? "en",
                "font-lustria"
              )}`}
            >
              {translations.eventDetails}
            </p>
            <p>{translations.venue}</p>
          </div>

          {submitStatus === "success" ? (
            <div className="py-10 text-center">
              <p
                className={`text-xl font-medium text-green-600 ${getFontClass(
                  language ?? "en",
                  "font-lustria"
                )}`}
              >
                {translations.successMessage}
              </p>
              <p
                className={`mt-4 text-gray-600 ${getFontClass(
                  language ?? "en",
                  "font-lustria"
                )}`}
              >
                {translations.successSubMessage}
              </p>
              <Button
                onClick={() => {
                  setIsDialogOpen(false);
                  setSubmitStatus("");
                }}
                className={`mt-6 rounded-full bg-[#f3bdaf] hover:bg-[#f3bdaf] text-gray-800 ${getFontClass(
                  language ?? "en",
                  "font-lustria"
                )}`}
              >
                {translations.closeButton}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p
                    className={`text-red-600 text-sm ${getFontClass(
                      language ?? "en",
                      "font-lustria"
                    )}`}
                  >
                    {translations.errorMessage}
                  </p>
                </div>
              )}

              {guests.map((guest, index) => (
                <div key={index}>
                  {/* Add divider before Guest 2 */}
                  {index === 1 && (
                    <div className="border-t border-gray-200 pt-4 mb-4"></div>
                  )}

                  {/* Guest header */}
                  <div className="mb-4">
                    <h3
                      className={`text-lg font-medium text-gray-800 ${getFontClass(
                        language ?? "en",
                        "font-lustria"
                      )}`}
                    >
                      {translations.guestLabel} {index + 1}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder={translations.fullNamePlaceholder}
                        value={guest.name}
                        onChange={(e) =>
                          updateGuest(index, "name", e.target.value)
                        }
                        required={index === 0}
                        className="rounded-full border-gray-200"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder={translations.dietaryPlaceholder}
                        value={guest.dietary}
                        onChange={(e) =>
                          updateGuest(index, "dietary", e.target.value)
                        }
                        className="rounded-full border-gray-200"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${getFontClass(
                    language ?? "en",
                    "font-lustria"
                  )}`}
                >
                  {translations.messageLabel}
                </label>
                <Textarea
                  id="message"
                  placeholder={translations.messagePlaceholder}
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
                    className={`rounded-full border-[#f3bdaf] text-gray-700 hover:bg-pink-50 text-lg ${getFontClass(
                      language ?? "en",
                      "font-lustria"
                    )}`}
                  >
                    {translations.addGuestButton}
                  </Button>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`rounded-full bg-[#f3bdaf] hover:bg-[#f3bdaf] text-gray-800 text-lg ${getFontClass(
                    language ?? "en",
                    "font-lustria"
                  )}`}
                >
                  {isSubmitting
                    ? translations.submittingButton
                    : translations.submitButton}
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
