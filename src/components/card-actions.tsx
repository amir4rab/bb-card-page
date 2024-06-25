import { Show, type Accessor } from "solid-js";

// Icons
import { PauseIcon, PinIcon, LockResetIcon, ShareIcon } from "./icons";

// Hooks
import useViewTransition from "../hooks/view-transition";

// Sub-Components
const ActionButton = (props: { children?: any }) => {
  return (
    <button class="bg-amber-400/10 active:bg-amber-400/15 text-amber-50 transition-colors duration-150 aspect-square flex justify-center items-center rounded-3xl p-4">
      {props.children}
    </button>
  );
};

const CardActions = (props: { focused: Accessor<boolean> }) => {
  const [_, supportsViewTransition] = useViewTransition();

  return (
    <Show when={props.focused() || !supportsViewTransition()}>
      <div
        data-focused={props.focused()}
        class={[
          "card-actions",
          "view-transition",
          "absolute",
          "bottom-0",
          "left-0",
          "gap-6",
          "grid",
          "grid-cols-4",
          "p-8",
          "w-full",
          "transition-[transform,filter]",
          // Un-Focused State
          "translate-y-[calc(110%_+_theme(spacing.8))]",
          "blur-md",
          // Focused State
          "data-[focused=true]:translate-y-0",
          "data-[focused=true]:blur-none",
        ].join(" ")}
      >
        <ActionButton>
          <LockResetIcon />
        </ActionButton>
        <ActionButton>
          <PauseIcon />
        </ActionButton>
        <ActionButton>
          <PinIcon />
        </ActionButton>
        <ActionButton>
          <ShareIcon />
        </ActionButton>
      </div>
    </Show>
  );
};

export default CardActions;
