import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex py-4 px-6 justify-center items-center gap-2 self-stretch rounded-lg bg-amber-400"
      disabled={pending}
    >
      <span className="font-bold text-base">
        {pending ? "Please wait..." : "Create"}
      </span>
    </button>
  );
}
