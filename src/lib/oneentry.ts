import { defineOneEntry } from "oneentry";

const config = {
  token: process.env.ONEENTRY_TOKEN!,
};

const { AuthProvider } = defineOneEntry(
  process.env.NEXT_PUBLIC_ONEENTRY_DOMAIN as string,
  config
);

export { AuthProvider };