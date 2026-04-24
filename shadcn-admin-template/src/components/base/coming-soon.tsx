import { Telescope } from "lucide-react";
import { m } from "#/paraglide/messages";

export function ComingSoon() {
	return (
		<div className="h-svh">
			<div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
				<Telescope size={72} />
				<h1 className="font-bold text-4xl leading-tight">
					{m.coming_soon_title()}
				</h1>
				<p className="text-center text-muted-foreground">
					{m.coming_soon_desc()} <br />
					{m.coming_soon_stay_tuned()}
				</p>
			</div>
		</div>
	);
}
