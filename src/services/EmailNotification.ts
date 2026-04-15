import { ILogger, INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class EmailNotification implements INotificationChannel {
  public constructor(private logger: ILogger) {}

  public send(user: User, message: string): void {
    this.logger.log(`Sending EMAIL to ${user.email}`);
    this.logger.log(`Email sent to ${user.email}: ${message}`);
  }
}
