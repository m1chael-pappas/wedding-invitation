export interface TimelineEvent {
  date: string;
  description: string;
}

export interface GroomSection {
  title: string;
  name: string;
  origin: string;
  profession: string;
  mbti: string;
  zodiac: string;
}

export interface BrideSection {
  title: string;
  name: string;
  origin: string;
  profession: string;
  mbti: string;
  zodiac: string;
}

export interface AboutWeddingCeremony {
  title: string;
  description: string;
  rainPlan: string;
}

export interface AboutWeddingDressCode {
  title: string;
  description: string;
}

export interface AboutWeddingReception {
  title: string;
  description: string;
  activities: string;
}

export interface AboutWedding {
  title: string;
  description: string;
  ceremony: AboutWeddingCeremony;
  dressCode: AboutWeddingDressCode;
  reception: AboutWeddingReception;
}

export interface RSVP {
  title: string;
  honorMessage: string;
  seatingMessage: string;
  form: {
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
  };
}

export interface TransportInfo {
  title: string;
  station: string;
  directions: string;
}

export interface ParkingInfo {
  title: string;
  dropOff: string;
  nearby: string;
  mapReference: string;
}

interface ParkingLocationInfo {
  name: string;
  distance: string;
  address: string;
}
export interface GettingThere {
  title: string;
  venueFullName: string;
  address: string;
  transport: TransportInfo;
  parking: ParkingInfo;
  parkingLocationTitle: string;
  parkingLocations: ParkingLocationInfo[];
}

export interface Closing {
  withLove: string;
  names: string;
}

export interface Translation {
  language: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
  venueCity: string;
  venueFullDate: string;
  venueTime: string;
  weddingAnnouncement: string;
  celebrationMessage: string;
  distanceMessage: string;
  fromTwoStoriesToOne: string;
  sharedChapter: string;
  dotJoining: string;
  ourStory: string;
  timelineEvents: {
    [key: string]: TimelineEvent;
  };
  dotJoinedText: string;
  dotJoinedTextEnd: string;
  groomSection: GroomSection;
  brideSection: BrideSection;
  aboutWedding: AboutWedding;
  rsvp: RSVP;
  gettingThere: GettingThere;
  closing: Closing;
}

export interface Translations {
  en: Translation;
  ko: Translation;
  el: Translation;
}
