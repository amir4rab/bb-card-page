// Types
import type { Accessor, Setter } from "solid-js";

// Hooks
import useViewTransition from "../hooks/view-transition";

interface CardProps {
  setFocused: Setter<boolean>;
  focused: Accessor<boolean>;
}

const Card = (props: CardProps) => {
  const [startViewTransition] = useViewTransition();

  const onClick = () => {
    startViewTransition(() => {
      // Toggling the focused state on click
      props.setFocused((curr) => !curr);
    });
  };

  return (
    <div
      data-focused={props.focused()}
      onClick={onClick}
      style={{ "aspect-ratio": "1 / 1.5" }}
      class={[
        "card",
        "view-transition",
        "bg-gradient-to-bl",
        "from-amber-300",
        "to-amber-400",
        "rounded-3xl",
        "p-8",
        "h-96",
        // Base Styles
        "rotate-[5deg]",
        "translate-y-[calc(25%_+_theme(spacing.10))]",
        // Focused Styles
        "data-[focused=true]:rotate-0",
        "data-[focused=true]:translate-y-[calc(40%_+_theme(spacing.10))]",
        "transition-transform",
      ].join(" ")}
    >
      <p class="text-3xl font-black text-amber-900 leading-none select-none">
        <span>Bee</span>
        <br />
        <span>Bank</span>
      </p>
    </div>
  );
};

export default Card;
