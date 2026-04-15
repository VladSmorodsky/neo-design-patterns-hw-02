import { ILogger, INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class SMSNotification implements INotificationChannel {
  public constructor(private logger: ILogger) {}

  public send(user: User, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    this.logger.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
