import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import { slGreenLine } from '../data/slGreenLine'

export default function Map() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const map = new maplibregl.Map({
      container: ref.current,
      style:
        'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [18.05, 59.33],
      zoom: 9,
    })

    map.addControl(new maplibregl.NavigationControl())

    map.on('load', () => {
      // SOURCE
      map.addSource('sl-green', {
        type: 'geojson',
        data: slGreenLine,
      })

      // POINTS
      map.addLayer({
        id: 'stations',
        type: 'circle',
        source: 'sl-green',
        paint: {
          'circle-radius': 7,
          'circle-color': '#22c55e',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
        },
      })

      // LABELS
      map.addLayer({
        id: 'labels',
        type: 'symbol',
        source: 'sl-green',
        layout: {
          'text-field': ['get', 'name'],
          'text-size': 12,
          'text-offset': [0, 1.2],
        },
        paint: {
          'text-color': '#ffffff',
        },
      })

      // FIT ALL STATIONS (CRITICAL)
      const coords = slGreenLine.features.map(
        (f: any) => f.geometry.coordinates
      )

      const lons = coords.map((c: any) => c[0])
      const lats = coords.map((c: any) => c[1])

      map.fitBounds(
        [
          [Math.min(...lons), Math.min(...lats)],
          [Math.max(...lons), Math.max(...lats)],
        ],
        { padding: 80 }
      )
    })

    return () => map.remove()
  }, [])

  return <div ref={ref} className="w-full h-full" />
}