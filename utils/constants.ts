import { isDev } from "./helpers";

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    // todo: using test links for now
    paymentLink: isDev
      ? "https://buy.stripe.com/test_eVafZU6tzbvkdeU288"
      : "https://buy.stripe.com/test_eVafZU6tzbvkdeU288",
    priceId: isDev
      ? "price_1RH4gnP0DGrc5cTBw2CgUCbQ"
      : "price_1RH4gnP0DGrc5cTBw2CgUCbQ",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown export",
    ],
    // todo: using test links for now
    paymentLink: isDev
      ? "https://buy.stripe.com/test_3csbJEbNT2YOfn28wx"
      : "https://buy.stripe.com/test_3csbJEbNT2YOfn28wx",
    priceId: isDev
      ? "price_1RH4gnP0DGrc5cTBsoKJycIf"
      : "price_1RH4gnP0DGrc5cTBsoKJycIf",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};
