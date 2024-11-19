import React from 'react'

interface RecipeTextProps {
    image: string | null,
    description: string | null
}

const RecipeText: React.FC<RecipeTextProps> = ({image, description}) => {
    return (
        <div className='sm:w-3/4 w-full flex flex-col gap-4'>
            <div className="w-full h-64">
                {image && <img src={image} alt="" className='w-full h-full rounded-lg object-cover' />}
            </div>
            <div className="cooking">
                <h3 className='title_text'>How to cook</h3>
                <p className='desc_text'>{description}</p>
            </div>

        </div>
    )
}

export default RecipeText