import { Button } from "@/components/ui/button"
import { IconDraw } from "central-icons"

export default function Home() {
    return (
        <div className="font-sans min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Button variant="link" className="">
                    <IconDraw />
                    Craftbook
                </Button>
            </main>
        </div>
    )
}
