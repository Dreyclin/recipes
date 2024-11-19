export interface Filter {
    filterName: string | null,
    checked: boolean | null
}

export interface FilterInitial {
    filters: Filter[],
    status: "idle" | "pending" | "error" | "successfull",
    error: string | null
}