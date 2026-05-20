import type { FeatureCollection } from 'geojson'

export const slGreenLine: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { id: 1, name: 'Hässelby strand' },
      geometry: { type: 'Point', coordinates: [17.8433, 59.361] },
    },
    {
      type: 'Feature',
      properties: { id: 2, name: 'Hässelby gård' },
      geometry: { type: 'Point', coordinates: [17.8429, 59.366] },
    },
    {
      type: 'Feature',
      properties: { id: 3, name: 'Johannelund' },
      geometry: { type: 'Point', coordinates: [17.85, 59.3678] },
    },
    {
      type: 'Feature',
      properties: { id: 4, name: 'Vällingby' },
      geometry: { type: 'Point', coordinates: [17.8729, 59.3633] },
    },
    {
      type: 'Feature',
      properties: { id: 5, name: 'Råcksta' },
      geometry: { type: 'Point', coordinates: [17.8817, 59.3537] },
    },
    {
      type: 'Feature',
      properties: { id: 6, name: 'Blackeberg' },
      geometry: { type: 'Point', coordinates: [17.8837, 59.3484] },
    },
    {
      type: 'Feature',
      properties: { id: 7, name: 'Islandstorget' },
      geometry: { type: 'Point', coordinates: [17.8949, 59.3456] },
    },
    {
      type: 'Feature',
      properties: { id: 8, name: 'Ängbyplan' },
      geometry: { type: 'Point', coordinates: [17.9019, 59.3394] },
    },
    {
      type: 'Feature',
      properties: { id: 9, name: 'Åkeshov' },
      geometry: { type: 'Point', coordinates: [17.924, 59.3428] },
    },
    {
      type: 'Feature',
      properties: { id: 10, name: 'Brommaplan' },
      geometry: { type: 'Point', coordinates: [17.939, 59.3394] },
    },
    {
      type: 'Feature',
      properties: { id: 11, name: 'Alvik' },
      geometry: { type: 'Point', coordinates: [17.9802, 59.333] },
    },
    {
      type: 'Feature',
      properties: { id: 12, name: 'Fridhemsplan' },
      geometry: { type: 'Point', coordinates: [18.0282, 59.3324] },
    },
    {
      type: 'Feature',
      properties: { id: 13, name: 'T-Centralen' },
      geometry: { type: 'Point', coordinates: [18.0686, 59.3303] },
    },
    {
      type: 'Feature',
      properties: { id: 14, name: 'Gamla Stan' },
      geometry: { type: 'Point', coordinates: [18.0675, 59.3232] },
    },
    {
      type: 'Feature',
      properties: { id: 15, name: 'Slussen' },
      geometry: { type: 'Point', coordinates: [18.0717, 59.3195] },
    },
  ],
}