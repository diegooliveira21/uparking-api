import { Log, Logging } from "@google-cloud/logging";
import { google } from "@google-cloud/logging/build/protos/protos";
import LogSeverity = google.logging.type.LogSeverity;
import { Label } from "./logger.type";

export default class Logger {
  private logging = new Logging({
    projectId: '',
  })

  private log: Log = this.logging.log('')

  private labels: Label

  private payload: string

  private severity: LogSeverity = LogSeverity.INFO

  setName(name: string): this {
    this.log.name = name

    return this
  }

  setPayload(payload: unknown): this {
    this.payload = typeof payload === 'string' ?
      payload :
      JSON.stringify(payload)

    return this
  }

  addLabel(label: Label): this {
    this.labels = {
      ...this.labels,
      ...label
    }

    return this
  }

  setSeverity(severity: LogSeverity): this {
    this.severity = severity

    return this
  }

  async build(): Promise<void> {
    const entry = this.log.entry(
      {
        resource: {
          type: 'global',
        },
        labels: this.labels,
        severity: this.severity,
      },
      this.payload
    )

    await this.log.write(entry)
  }
}
