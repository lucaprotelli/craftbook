import { Canvas } from "@/components/canvas"
import { Button } from "@/components/ui/button"
import { Item, ItemContent } from "@/components/ui/item"
import { IconDraw } from "central-icons"

export default function Home() {
    return (
        <div className="font-sans min-h-screen flex flex-col items-center justify-center gap-8 px-4">
            <Button variant="link" className="px-4 sm:px-6 lg:px-8 py-2">
                <IconDraw />
                Craftbook
            </Button>
            <Item variant="outline" className="w-full max-w-3xl mx-auto">
                <ItemContent className="w-full items-center justify-center">
                    <Canvas />
                </ItemContent>
            </Item>
        </div>
    )
}
