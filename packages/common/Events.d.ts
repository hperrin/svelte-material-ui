export interface SMUIEventDetail {}

export interface SMUIEvent<T extends SMUIEventDetail = SMUIEventDetail>
  extends CustomEvent<T> {
  readonly detail?: T;
}
