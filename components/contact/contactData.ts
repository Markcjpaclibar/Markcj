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
    value: "markcjpaclibar16@gmail.com",
    href: "mailto:markcjpaclibar16@gmail.com",
    clickable: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 9636249982",
    href: "tel:+639636249982",
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