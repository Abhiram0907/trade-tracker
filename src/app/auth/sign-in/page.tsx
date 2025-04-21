import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="bg-card border rounded-lg shadow-xl p-10 grid gap-6 w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px]">
        <div className="text-center text-lg font-semibold tracking-wide">TRADE TRACKER</div>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/reset-password"
                  className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
        <Separator className="bg-white"/>
        <div className="flex items-center justify-center gap-4 text-xs uppercase text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          <span>Or continue with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            Google
          </Button>
          <Button variant="outline" className="w-full">
            GitHub
          </Button>
        </div>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="text-primary underline-offset-4 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
