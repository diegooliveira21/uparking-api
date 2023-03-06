import { google } from "@google-cloud/logging/build/protos/protos";

export type Label = {
  [key: string]: string
}

export type Severity = google.logging.type.LogSeverity
