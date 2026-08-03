import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_FE_URL: requiredString.url(),
    NEXT_PUBLIC_BE_URL: requiredString.url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_FE_URL: process.env.NEXT_PUBLIC_FE_URL,
    NEXT_PUBLIC_BE_URL: process.env.NEXT_PUBLIC_BE_URL,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
