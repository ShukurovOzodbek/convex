import { Menu, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AppHeader() {
    return (
        <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
                <h1 className="text-lg font-semibold">Sheet</h1>
            </div>
            <div className="flex-1 max-w-2xl mx-8">
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring"
                />
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Settings className="h-4 w-4" />
                    <span className="sr-only">Settings</span>
                </Button>
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
