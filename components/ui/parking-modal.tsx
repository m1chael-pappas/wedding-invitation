import Image from 'next/image';

import { Translation } from '@/app/types/translations';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getFontClass } from '@/lib/utils';

interface ParkingModalProps {
  t: Translation;
  language: string;
}

function ParkingModal({ t, language }: ParkingModalProps) {
  const parkingLocations = t.gettingThere.parkingLocations;

  return (
    <div className="mb-6 text-lg/snug">
      <h3
        className={`flex items-center text-lg font-black mb-2 ${getFontClass(
          language,
          "font-lustria"
        )}`}
      >
        <span className="mr-2">🚗</span> {t.gettingThere.parking.title}
      </h3>
      <p className={`ml-2 mb-1 ${getFontClass(language, "font-lustria")}`}>
        {t.gettingThere.parking.dropOff}
      </p>
      <p className={`ml-2 mb-1 ${getFontClass(language, "font-lustria")}`}>
        {t.gettingThere.parking.nearby}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <p
            className={`ml-2 text-blue-600 hover:text-blue-800 cursor-pointer underline ${getFontClass(
              language,
              "font-lustria"
            )} `}
          >
            {t.gettingThere.parking.mapReference}
          </p>
        </DialogTrigger>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle
              className={`ml-2 ${getFontClass(language, "font-lustria")} `}
            >
              {t.gettingThere.parkingLocationTitle}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Map image based on language */}
            <div className="w-full">
              <Image
                src={
                  language === "ko"
                    ? "/LauristonParking_ko.jpg"
                    : "/LauristonParking_en.jpg"
                }
                alt="Parking map"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border"
              />
            </div>

            {/* Parking locations */}
            <div className="space-y-3">
              {parkingLocations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-1 p-3 bg-gray-50 rounded-lg"
                >
                  <div className=" rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
                    🅿️
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-semibold text-sm ${getFontClass(
                        language,
                        "font-lustria"
                      )}`}
                    >
                      {location.name} ({location.distance})
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        location.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm underline"
                    >
                      {location.address}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export { ParkingModal };
