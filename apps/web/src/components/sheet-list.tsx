import { FileText, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SheetList() {
    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="space-y-4">
                <div className="flex items-center gap-3 hover:bg-muted/50 rounded-md px-3 py-3 cursor-pointer border-2 border-dashed border-muted-foreground/30">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Plus className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Create new sheet</span>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-3">Today</h3>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Budget Planning 2024</span>
                                    <span className="text-xs text-muted-foreground">Dec 8, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Project Timeline</span>
                                    <span className="text-xs text-muted-foreground">Dec 8, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-3">This week</h3>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Sales Report Q4</span>
                                    <span className="text-xs text-muted-foreground">Dec 5, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Team Schedule</span>
                                    <span className="text-xs text-muted-foreground">Dec 3, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-3">Earlier</h3>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Untitled Spreadsheet</span>
                                    <span className="text-xs text-muted-foreground">Nov 27, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Inventory Tracker</span>
                                    <span className="text-xs text-muted-foreground">Nov 15, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md px-3 py-2 cursor-pointer border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Monthly Expenses</span>
                                    <span className="text-xs text-muted-foreground">Oct 28, 2024</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
