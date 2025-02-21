import { ImageProps } from './image.type'

const Image = ({ src, alt = 'Image', lazy = false, className = '' }: ImageProps) => {
  const lazyImage = lazy ? ({ loading: 'lazy' } as const) : {}
  return (
    <div className="image-wrapper">
      <img className={`image ${className}`} src={src} alt={alt} {...lazyImage} />
    </div>
  )
}

export default Image
