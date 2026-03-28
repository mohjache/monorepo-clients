import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-16">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Plantr is wired into the Turborepo</CardTitle>
          <CardDescription>
            This app now extends the shared TypeScript config and imports
            components from <code>@repo/ui</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Use this page as a smoke test while you continue replacing the T3
            starter content.
          </p>
          <div>
            <Button>Shared UI package works</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
