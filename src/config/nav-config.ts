import { Permissions } from "./permissions";

export const navConfig: {
  permissions: string[];
  key: string;
  label: string;
  link?: string;
  icon?: string;
  subLink?: any[];
  type?: "group";
}[] = [
  {
    permissions: [Permissions.ADMINISTRATEUR, Permissions.SUPER_USER],
    label: "Voitures",
    link: "/cars",
    icon: "home_app_logo",
    key: "cars",
  },
  {
    permissions: [Permissions.ADMINISTRATEUR, Permissions.SUPER_USER],
    label: "Requêtes",
    link: "/requests",
    icon: "add_link",
    key: "request",
  },
];
