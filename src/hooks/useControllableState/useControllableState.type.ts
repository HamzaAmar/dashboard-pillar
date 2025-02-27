export interface UseControllableState<T> {
  prop?: T
  onChange?: (value: T) => void
  initialProp?: T
}
