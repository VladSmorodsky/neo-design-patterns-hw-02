import { INotificationChannel, INotificationService } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService implements INotificationService {
  private notificationChannels: INotificationChannel[] = [];

  public addChannel(channel: INotificationChannel): void {
    if (this.hasChannel(channel)) {
      return;
    }
    this.notificationChannels.push(channel);
  }

  public removeChannel(channel: INotificationChannel): void {
    this.notificationChannels = this.notificationChannels.filter(
      (notificationChannel) => notificationChannel !== channel,
    );
  }

  public hasChannel(channel: INotificationChannel): boolean {
    return this.notificationChannels.includes(channel);
  }

  public notify(user: User, message: string): void {
    this.notificationChannels.forEach((channel) => channel.send(user, message));
  }
}
