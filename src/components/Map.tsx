import { useEffect, useRef } from 'react'

import maplibregl from 'maplibre-gl'

import { createRoot } from 'react-dom/client'

import PopupCard from './PopupCard'

import type { Location } from '../types/location'

type Props = {
  selectedLocation: Location | null
  locations: Location[]
}

function Map({
  selectedLocation,
  locations,
}: Props) {
  const mapContainer =
    useRef<HTMLDivElement | null>(null)

  const mapRef =
    useRef<maplibregl.Map | null>(null)

  const markersRef = useRef<maplibregl.Marker[]>(
    []
  )

  // INIT MAP
  useEffect(() => {
    if (!mapContainer.current) return

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style:
        'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [18.0686, 59.3293],
      zoom: 11,
    })

    map.addControl(
      new maplibregl.NavigationControl(),
      'top-right'
    )

    mapRef.current = map

    return () => {
      map.remove()
    }
  }, [])

  // UPDATE MARKERS WHEN FILTER CHANGES
  useEffect(() => {
    if (!mapRef.current) return

    const map = mapRef.current

    // REMOVE OLD MARKERS
    markersRef.current.forEach((marker) =>
      marker.remove()
    )

    markersRef.current = []

    // CREATE NEW MARKERS
    locations.forEach((location) => {
      const popupNode =
        document.createElement('div')

      createRoot(popupNode).render(
        <PopupCard location={location} />
      )

      const popup = new maplibregl.Popup({
        offset: 25,
      }).setDOMContent(popupNode)

      const marker = new maplibregl.Marker({
        color: '#48bb78',
      })
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map)

      markersRef.current.push(marker)
    })
  }, [locations])

  // FLY TO LOCATION
  useEffect(() => {
    if (!mapRef.current) return

    const map = mapRef.current

    // RESET VIEW
    if (!selectedLocation) {
      map.flyTo({
        center: [18.0686, 59.3293],
        zoom: 11,
        speed: 1.2,
      })

      return
    }

    // FLY TO SELECTED
    map.flyTo({
      center: selectedLocation.coordinates,
      zoom: 14,
      speed: 1.2,
    })
  }, [selectedLocation])

  return (
    <div
      ref={mapContainer}
      className="h-full w-full"
    />
  )
}

export default Map