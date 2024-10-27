import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-center">
        Aggregate Your Saved Posts
        <br className="hidden sm:inline" />
        All in One Place
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground text-center">
        SocialSaver helps you manage and organize saved posts from various
        social media platforms in a single, convenient dashboard.
      </p>
      <div className="flex gap-4">
        <Link href="/signup">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" size="lg">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
}
