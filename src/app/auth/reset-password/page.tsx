import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div
        className=" bg-card border rounded-lg shadow-xl p-10 grid gap-6
          w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px]"
      >
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

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="/auth/sign-in" className="text-primary underline-offset-4 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
