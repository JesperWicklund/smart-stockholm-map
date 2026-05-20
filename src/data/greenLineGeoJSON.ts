import type { FeatureCollection } from 'geojson'

export const greenLineGeoJSON: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Green Line',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [17.8433, 59.361], // Hässelby Strand
          [17.8429, 59.366],
          [17.85, 59.3678],
          [17.8729, 59.3633],
          [17.8817, 59.3537],
          [17.8837, 59.3484],
          [17.8949, 59.3456],
          [17.9019, 59.3394],
          [17.924, 59.3428],
          [17.939, 59.3394],
          [17.9529, 59.3367],
          [17.9673, 59.3345],
          [17.9802, 59.333],
          [18.0006, 59.3325],
          [18.0282, 59.3324],
          [18.0686, 59.3303], // T-Centralen
          [18.0675, 59.3232],
          [18.0717, 59.3195],
        ],
      },
    },
  ],
}