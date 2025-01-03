import { cn } from "@/lib/utils"

interface ContainerProps {
    children: React.ReactNode
    className?: string

}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className="w-full px-4">
            <div className={cn("mx-auto max-w-container", className)}>{children}</div>
        </div>
    )
}

export default Container