export type NavItemProps = {
    title: string;
    link: string;
};

export type HeaderProps = {
  title: string;
  text: string;
  resume:string
};

export type ServiceItemProps = {
  title: string;
  text: string;
  image: string;
};

export type ServiceProps = {
  title: string;
  text: string;
  items: ServiceItemProps[];
};

export type PortfolioItemProps = {
  title: string;
  tags: string[];
  description: string;
  image: string;
  repo: string;
  icon:string
  link: string;
};

export type PortfolioProps = {
  title: string;
  text: string;
  items: PortfolioItemProps[];
  skills: {
    languages: { title: string; image: string }[];
    frameworks: { title: string; image: string }[];
    databases: { title: string; image: string }[];
  };
};

export type ExperienceItemProps = {
  title: string;
  company: string;
  text: string;
  start: string;
  current: boolean;
  end: string;
  image: string;
  // runtime-only prop (not required in data) to signal inverted layout
  inverted?: boolean;
};

export type ExperienceProps = {
  title: string;
  text: string;
  items: ExperienceItemProps[];
};

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export type ContactProps = {
  title: string;
  text: string;
  form: ContactForm;
  nameField: string;
  emailField: string;
  phoneField: string;
  companyField: string;
  subjectField:string;
  messageField: string;
  buttonText: string;
  sucessMessage:string;
  failMessage:string;
};

export type FooterProps = {
  copyrightText: string;
  links: {
    title: string;
    icon: string;
    link: string;
  }[];
};

export type Schema = {
  nav: NavItemProps[];
  header: HeaderProps;
  services: ServiceProps;
  portfolio: PortfolioProps;
  experience: ExperienceProps;
  contact: ContactProps;
  footer: FooterProps;
};

export const langs = ['en','fr'] as const
export type lang = typeof langs[number]