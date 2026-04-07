import useEmblaCarousel from 'embla-carousel-react'
import HoverVideoPlayer from 'react-hover-video-player'
import './App.css'

function WorkSamples({ title = '', mediaItems = [] }) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: true
  })

  return (
    <div className="work-samples">
      {title && <p className='work-samples-title'>{title}</p>}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {mediaItems.map((item, index) => (
              <div key={`${item.type}-${index}`} className="embla__slide">
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt || 'work sample'} />
                ) : item.type === 'video' ? (
                  <HoverVideoPlayer
                    key={`video-${item.videoSrc}`}
                    videoSrc={item.videoSrc}
                    restartOnPaused
                    unloadVideoOnPaused={false}
                    preload="metadata"
                    pausedOverlay={
                      <img
                        src={item.thumbnail}
                        alt="video thumbnail"
                        className="video-thumbnail"
                      />
                    }
                    loadingOverlay={
                      <div className="video-loading-spinner" />
                    }
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSamples