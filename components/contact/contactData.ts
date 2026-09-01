import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";
import { IconType } from "react-icons";

export type ContactItem = {
  icon: IconType;
  title: string;
  value: string;
  href?: string;
  clickable?: boolean;
};

export const contactData: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "markcjpaclibarcareer.com",
    href: "mailto:markcjpaclibarcareer@gmail.com",
    clickable: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 956 9378 612",
    href: "tel:+63 963 6249 982",
    clickable: true,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Iloilo City, Philippines",
    clickable: false,
  },
  {
    icon: FaFacebookF,
    title: "Facebook",
    value: "Mark Cj Paclibar",
    href: "https://facebook.com/",
    clickable: true,
  },
];