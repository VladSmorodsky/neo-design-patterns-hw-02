import { ILogger, INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class PushNotification implements INotificationChannel {
  public constructor(private logger: ILogger) {}

  public send(user: User, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    this.logger.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}
