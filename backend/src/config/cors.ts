import { ALLOWED_DOMAINS } from "@/lib/constants";
import { CorsOptions } from "cors";
import { Request } from "express";

export function corsOptionsDelegate(
  req: Request,
  callback: (err: Error | null, options?: CorsOptions) => void
) {
  const reqOrigin = req.header("Origin") ?? "";
  let corsOptions;

  if (ALLOWED_DOMAINS.includes(reqOrigin)) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }

  callback(null, corsOptions); // callback expects two parameters: error and options
}
