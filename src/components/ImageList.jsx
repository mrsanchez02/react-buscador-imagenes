import React from 'react'
import RenderedImage from './RenderedImage'

const ImageList = ({results}) => {
    return (
        <div className="col-12 p-5 row">
            {results.map(result=>(
                <RenderedImage
                    key={result.id}
                    result={result}
                />
            ))}
        </div>
    )
}

export default ImageList
