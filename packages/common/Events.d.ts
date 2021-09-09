export interface SMUIEventDetail {}

export interface SMUIEvent<T extends SMUIEventDetail = SMUIEventDetail>
  extends Event {
  detail?: T;
}
