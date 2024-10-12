import { NOTIFICATION_LIST } from './notification.data'

export function getNotifications(max?: number) {
  const SortedNotification = NOTIFICATION_LIST.sort((a, b) => -(a.date.getTime() - b.date.getTime()))

  return max ? SortedNotification.slice(0, max) : SortedNotification
}

export function getNotification(id: string) {
  return NOTIFICATION_LIST.find((notification) => notification.id === id)
}
