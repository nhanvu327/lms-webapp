import { ComponentType, ReactNode } from "react";

declare module "react" {
  export interface PlaceholderProps {
    delayMs?: number;
    fallback?: ReactNode;
  }

  export const Suspense: ComponentType<PlaceholderProps>;

  // Technically this should be returning a PromiseLike but React consumes it as
  // if it was resolved. Looks like some changes to the React declarations are
  // in order to support this.
  export function lazy<T>(ctor: () => PromiseLike<T>):  StatelessComponent<RouteComponentProps<any, StaticContext, any>>;

  export function useState(value: any): any;

  export function useEffect(method: () => any, statesToChange): any;

  export function useRef(payload): any;
}