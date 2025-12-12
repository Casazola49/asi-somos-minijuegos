import { cn } from "@/lib/utils";

interface ComicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: "white" | "yellow" | "blue" | "red" | "purple";
}

export function ComicCard({
    children,
    className,
    color = "white",
    ...props
}: ComicCardProps) {
    const colors = {
        white: "bg-white",
        yellow: "bg-comic-yellow",
        blue: "bg-comic-blue",
        red: "bg-comic-red",
        purple: "bg-comic-purple",
    };

    return (
        <div
            className={cn(
                "border-4 border-comic-black rounded-xl p-6 shadow-comic-lg",
                colors[color],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
