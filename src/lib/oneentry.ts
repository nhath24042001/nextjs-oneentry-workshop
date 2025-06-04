import { defineOneEntry } from "oneentry";

export function getOneEntry() {
  return defineOneEntry(process.env.NEXT_PUBLIC_ONEENTRY_DOMAIN as string, {
    token: process.env.ONEENTRY_TOKEN,
  });
}
