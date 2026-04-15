import { User } from "./models/User";
import { EmailNotification } from "./services/EmailNotification";
import { Logger } from "./services/Logger";
import { NotificationService } from "./services/NotificationService";
import { PushNotification } from "./services/PushNotification";
import { SMSNotification } from "./services/SMSNotification";

const user = new User("example@email.com", "+380123456789", "device-token-abc");
const message = "Ваш платіж оброблено успішно!";
const logger = new Logger();

const emailNotification = new EmailNotification(logger);
const smsNotification = new SMSNotification(logger);
const pushNotification = new PushNotification(logger);

const notificationService = new NotificationService();
notificationService.addChannel(emailNotification);
notificationService.addChannel(smsNotification);
notificationService.addChannel(pushNotification);

notificationService.notify(user, message);

console.log("-------");
notificationService.removeChannel(smsNotification);
notificationService.notify(user, message);
