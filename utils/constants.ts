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
    paymentLink: isDev ? "https://buy.stripe.com/test_eVafZU6tzbvkdeU288" : "",
    priceId: isDev ? "price_1RH4gnP0DGrc5cTBw2CgUCbQ" : "",
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
    paymentLink: isDev ? "https://buy.stripe.com/test_3csbJEbNT2YOfn28wx" : "",
    priceId: isDev ? "price_1RH4gnP0DGrc5cTBsoKJycIf" : "",
  },
];
