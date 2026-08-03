"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/classname";
import Link from "next/link";
import { useEffect } from "react";

export default function AppError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="font-inter flex min-h-dvh w-full items-center justify-center bg-background p-6 text-foreground">
			<div className="flex w-full max-w-md flex-col items-center space-y-4 text-center">
				<p className="text-sm text-muted-foreground">Error</p>
				<h2 className="font-poppins text-2xl font-semibold tracking-tight">
					Something went wrong
				</h2>
				<p className="text-muted-foreground text-sm leading-relaxed">
					An unexpected error occurred. You can try again or return home.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-2 pt-2">
					<Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
						Home
					</Link>
					<Button type="button" onClick={() => reset()}>
						Try again
					</Button>
				</div>
			</div>
		</div>
	);
}
