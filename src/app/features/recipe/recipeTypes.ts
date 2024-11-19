export interface Meal {
    id: number | null,
    meal: string | null,
    image: string | null,
    description: string | null,
    category: string,
    ingridients: string[],
    measures: string[]
}

export interface MealInitial {
    meals: Meal[],
    status: "idle" | "successful" | "error" | "pending"
    error: string | null
}