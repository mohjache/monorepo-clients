"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Spinner } from "@repo/ui/components/ui/spinner";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { joinWaitlist, type WaitlistActionState } from "~/app/actions";

const initialWaitlistState: WaitlistActionState = {
	status: "idle",
	message: "",
};

function SubmitButton({ label }: { label: string }) {
	const { pending } = useFormStatus();

	return (
		<Button
			aria-label={pending ? "Submitting…" : label}
			disabled={pending}
			type="submit"
			className="relative"
		>
			{/* Reserve the label's width at all times so the button never resizes */}
			<span aria-hidden className="invisible">{label}</span>

			{/* Overlay — label or spinner, centred absolutely */}
			<span className="absolute inset-0 flex items-center justify-center">
				{pending ? (
					<Spinner />
				) : (
					<span>{label}</span>
				)}
			</span>
		</Button>
	);
}

function FormMessage({ state }: { state: WaitlistActionState }) {
	if (state.status === "idle" || !state.message) return null;

	return (
		<p
			className={
				state.status === "success"
					? "text-primary text-sm leading-6"
					: "text-error text-sm leading-6"
			}
		>
			{state.message}
		</p>
	);
}

interface WaitlistFormProps {
	submitLabel?: string;
}

export function WaitlistForm({ submitLabel = "Join" }: WaitlistFormProps) {
	const [state, formAction] = useActionState(
		joinWaitlist,
		initialWaitlistState,
	);

	return (
		<form action={formAction} className="w-full">
			<div className="flex flex-col gap-3 sm:flex-row">
				<label className="sr-only" htmlFor="email">
					Email address
				</label>
				<Input
					autoComplete="email"
					className="h-11 flex-1 rounded-full bg-background px-5"
					id="email"
					name="email"
					placeholder="Enter your email"
					required
					type="email"
				/>
				<SubmitButton label={submitLabel} />
			</div>
			<div className="mt-3">
				<FormMessage state={state} />
			</div>
		</form>
	);
}
