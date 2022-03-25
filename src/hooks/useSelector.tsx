import { MutableRefObject, useMemo, useRef } from "react";

import gsap from "gsap";

export function useSelector<T>(
  initialValue: T | null
): [gsap.utils.SelectorFunc, MutableRefObject<T | null>] {
  const ref = useRef<T>(initialValue);
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}
