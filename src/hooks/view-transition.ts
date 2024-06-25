import { type Accessor, createSignal, onMount } from "solid-js";

type StartViewTransition = (cb: (supports: boolean) => void) => void;

type UseViewTransition = () => [
  startViewTransition: StartViewTransition,
  supportsViewTransition: Accessor<boolean>
];

/**
 * Provides utility function for calling the startViewTransition API and a signal for its support status by the browser
 *
 * @example
 * const ExampleComponent = () => {
 *  const [number,setNumber] = createSignal(0);
 *  const [start] = useViewTransition();
 *
 *  const increaseNum = () => {
 *    start(() => setNumber(curr => curr + 1));
 *  }
 *
 *  return (
 *    <div>
 *      <button onClick={increaseNum}>{number()}</button>
 *    </div>
 *  )
 * }
 */
const useViewTransition: UseViewTransition = () => {
  const [supports, setSupports] = createSignal<boolean>(false);

  // Hydrating the supports signal
  onMount(() => {
    if (typeof window === "undefined") return;
    if ("startViewTransition" in document) {
      setSupports(true);
    } else {
      setSupports(false);
      console.debug(
        "The browser doesn't support startViewTransition, falling back to the degraded mode"
      );
    }
  });

  /** Calls the startViewTransition API if its supported by the browser */
  const start: StartViewTransition = (cb) => {
    // Executing the callback with View Transition API
    // If it is supported
    if (supports()) {
      try {
        // @ts-ignore
        document.startViewTransition(cb.bind(null, true));
      } catch (err) {
        console.error(err);
        cb(false);
      }
    }

    // Calling the callback without view transition
    if (!supports()) {
      cb(false);
    }
  };

  return [start, supports];
};

export default useViewTransition;
