interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _id: string;
  _type: "image";
  name: string;
  asset: {
    _ref: string;
    type: "reference";
  };
}

export interface LearnMore extends SanityBody {
  _type: "learnMore";
  title: string;
  upcomingCourseStart: date;
  upcomingCourseEnd: date;
  earlyBirdCost: string;
  earlyBirdEnd: date; // Assuming you'll parse this as a date
  cost: string;
  deposit: string;
  fullPaymentDueDate: date; // Assuming you'll parse this as a date
  applyDeadline: date; // Assuming you'll parse this as a date
  cancelBy: string; // Assuming you'll parse this as a date
  pstLink: string;
  mstLink: string;
  cstLink: string;
  estLink: string;
  exampleSchedulePart1: Image;
  exampleSchedulePart2: Image;
  IPKnowledge: string;
  skills: string;
  network: string;
}

interface ImageWithHotspot extends Image {
  options: {
    hotspot: boolean;
  };
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface AlumniEvent extends SanityBody {
  _type: "alumniEvent";
  title: string;
  alumniImage: Image;
  date: date;
}

export interface CertificateEvent extends SanityBody {
  _type: "certificateEvent";
  title: string;
  certificateImage: Image;
  date: date;
}

export interface NewsEvent extends SanityBody {
  _type: "newsEvent";
  date: date;
  title: string;
  description: string;
  link: string;
}

export interface NewsEventsPage extends SanityBody {
  _type: "newsEventsPage";

  certificateEvents: CertificateEvent[];
  alumniEvents: AlumniEvent[];
  newsEvents: newsEvent[];
}
