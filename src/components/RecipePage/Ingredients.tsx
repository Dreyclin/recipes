import React from 'react'

interface IngredientProps {
    image: string | null,
    description: string | null,
    ingredients: string[],
    measures: string[]
}

const Ingredients: React.FC<IngredientProps> = ({ image, description, ingredients, measures }) => {

    return (
        <div className='py-4 px-4 bg-slate-200 w-full sm:w-1/4 rounded-lg flex flex-col gap-4'>
            <h2 className='title_text'>Ingredients</h2>
            <div className="desc_text flex flex-col gap-4">
                {ingredients && ingredients.map((ingredient, index) => (
                    <div className="ingredient">
                        {ingredient}: {measures[index]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ingredients