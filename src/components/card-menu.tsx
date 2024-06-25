import { Show, type Accessor } from "solid-js";

// Hooks
import useViewTransition from "../hooks/view-transition";

// Icons
import { ArrowForwardIcon, LightBulbIcon } from "./icons";

const CardMenu = (props: { focused: Accessor<boolean> }) => {
  const [_, supportsViewTransition] = useViewTransition();

  return (
    <Show when={!props.focused() || !supportsViewTransition()}>
      <div
        data-focused={props.focused()}
        class={[
          "card-menu",
          "view-transition",
          "bg-stone-900",
          "rounded-t-3xl",
          "p-8",
          "min-h-svh",
          "relative",
          "z-10",
          // Focused State
          "data-[focused=true]:translate-y-[100svh]",
          "data-[focused=true]:pointer-events-none",
        ].join(" ")}
      >
        {/* Visual Indicator */}
        <div class="w-12 h-1 absolute top-4 left-1/2 -translate-x-1/2 rounded-xl bg-stone-700 mx-auto" />

        {/* Title */}
        <h1 class="text-sm font-bold">Settings</h1>

        {/* Showing an error if we are in fallback mode */}
        <Show when={!supportsViewTransition()}>
          <div class="bg-stone-800 px-5 py-4 rounded-xl my-4 text-sm font-light">
            <p class="flex gap-2 items-center justify-start mb-2">
              <span class="inline-block p-1.5 rounded-lg bg-blue-400/10 text-blue-50">
                <LightBulbIcon class="size-4" />
              </span>
              <span class="text-base font-semibold">Alert</span>
            </p>
            <p class="my-0 leading-snug">
              Since your browser does not support the ViewTransition API we are
              using the fallback
            </p>
          </div>
        </Show>

        {/* Place holder items */}
        <div class="rounded-xl divide-y divide-dashed bg-stone-800 divide-stone-700 my-4">
          <a class="flex justify-between items-center px-5 py-2 first:pt-3 last:pb-3 text-sm">
            <span>Card Actions</span>
            <ArrowForwardIcon class="size-3.5" />
          </a>
          <a class="flex justify-between items-center px-5 py-2 first:pt-3 last:pb-3 text-sm">
            <span>Request a new Card</span>
            <ArrowForwardIcon class="size-3.5" />
          </a>
          <a class="flex justify-between items-center px-5 py-2 first:pt-3 last:pb-3 text-sm">
            <span>Transactions</span>
            <ArrowForwardIcon class="size-3.5" />
          </a>
        </div>

        {/* Noting that the icons are removed */}
        <div class="rounded-xl divide-y divide-dashed bg-stone-800 divide-stone-700 my-4 px-4 py-3">
          <p class="text-xs my-0 leading-relaxed font-light">
            Please keep in mind the original icons are removed. You can update
            the `components/icons.tsx` file to use your own icons.
          </p>
        </div>
      </div>
    </Show>
  );
};

export default CardMenu;
