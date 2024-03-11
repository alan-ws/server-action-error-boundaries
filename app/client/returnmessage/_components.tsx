import { useFormState, useFormStatus } from "react-dom";

const initialState = {
    message: "",
};

function SubmitButton({ type }: { type: string }) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" aria-disabled={pending}>CLICK ME CLIENT: {type}</button>
    );
}

export function FormSuccess({ action }: any) {
    const [state, formAction] = useFormState(action, initialState);

    return <form action={formAction}>
        <SubmitButton type="success" />
        <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
        </p>
    </form>
}

export function FormFail({ action }: any) {
    const [state, formAction] = useFormState(action, initialState);

    return <form action={formAction}>
        <SubmitButton type="fail" />
        <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
        </p>
    </form>
}