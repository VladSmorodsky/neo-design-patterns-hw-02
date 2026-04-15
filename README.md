# Neo Design Patterns - Homework 02

Multi-channel notification system implementation demonstrating design patterns in TypeScript.

## Design Patterns Used

### 1. Strategy Pattern
Each notification channel ([EmailNotification.ts](src/services/EmailNotification.ts), [SMSNotification.ts](src/services/SMSNotification.ts), [PushNotification.ts](src/services/PushNotification.ts)) implements the `INotificationChannel` interface, allowing them to be used interchangeably.

### 2. Observer Pattern
The [NotificationService](src/services/NotificationService.ts) manages multiple notification channels and broadcasts messages to all registered channels, similar to the observer pattern where channels "observe" user actions.

### 3. Dependency Injection
All notification channels receive the `ILogger` dependency through constructor injection, promoting loose coupling and testability.

## Architecture

```
src/
├── core/
│   └── interfaces.ts          # Core interfaces (INotificationChannel, ILogger, INotificationService)
├── models/
│   └── User.ts               # User model with contact information
├── services/
│   ├── NotificationService.ts # Main service managing notification channels
│   ├── EmailNotification.ts   # Email channel implementation
│   ├── SMSNotification.ts     # SMS channel implementation
│   ├── PushNotification.ts    # Push notification implementation
│   └── Logger.ts              # Simple logging implementation
└── main.ts                    # Demo application
```

## Key Features

- **Dynamic Channel Management**: Add or remove notification channels at runtime
- **Multiple Notification Channels**: Support for Email, SMS, and Push notifications
- **Logging**: All notification operations are logged
- **Type Safety**: Full TypeScript implementation with strict typing
- **SOLID Principles**: 
  - Single Responsibility: Each class has one clear purpose
  - Open/Closed: Easy to add new notification channels without modifying existing code
  - Liskov Substitution: All channels are interchangeable via `INotificationChannel`
  - Interface Segregation: Clean, focused interfaces
  - Dependency Inversion: Dependencies on abstractions, not concrete classes

## Implementation Details

### NotificationService
The service provides methods to:
- `addChannel(channel)` - Register a new notification channel
- `removeChannel(channel)` - Unregister a channel
- `hasChannel(channel)` - Check if a channel is registered
- `notify(user, message)` - Send message through all registered channels

### User Model
Contains user contact information:
- `email` - Email address
- `phone` - Phone number
- `deviceToken` - Push notification device token

### Notification Channels
Each channel:
- Implements `INotificationChannel` interface
- Uses dependency injection for logging
- Handles specific communication method (Email/SMS/Push)

## Installation

```bash
npm install
```

## Usage

Run the demo application:

```bash
npx ts-node src/main.ts
```

The demo creates a user, registers all three notification channels, sends a notification, then removes SMS channel and sends another notification to demonstrate dynamic channel management.

### Example Output

```
[LOG]: Sending EMAIL to example@email.com
[LOG]: Email sent to example@email.com: Ваш платіж оброблено успішно!
[LOG]: Sending SMS to +380123456789
[LOG]: SMS sent to +380123456789: Ваш платіж оброблено успішно!
[LOG]: Sending PUSH to device-token-abc
[LOG]: Push sent to device-token-abc: Ваш платіж оброблено успішно!
-------
[LOG]: Sending EMAIL to example@email.com
[LOG]: Email sent to example@email.com: Ваш платіж оброблено успішно!
[LOG]: Sending PUSH to device-token-abc
[LOG]: Push sent to device-token-abc: Ваш платіж оброблено успішно!
```

## Changes from Initial Commit

The main implementation (commit `5a5b54a`) added:
- Complete notification system architecture
- Three notification channel implementations
- Service layer with dynamic channel management
- Dependency injection setup
- Demo application showing the system in action
