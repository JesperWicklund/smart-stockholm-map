import { useState } from 'react'
import Map from './components/Map'
import type { Location, LocationCategory } from './types/location'

function App() {
  const [selectedLocation, setSelectedLocation] =
    useState<Location | null>(null)

  const [activeLayers, setActiveLayers] = useState<
    Record<LocationCategory, boolean>
  >({
    transport: true,
    housing: true,
    environment: true,
    infrastructure: true,
  })

  return (
    <div className="h-screen flex">
      <div className="w-80 p-4 bg-black text-white">
        {Object.keys(activeLayers).map((k) => (
          <button
            key={k}
            onClick={() =>
              setActiveLayers((p) => ({
                ...p,
                [k]: !p[k as LocationCategory],
              }))
            }
          >
            {k}
          </button>
        ))}
      </div>

      <div className="flex-1">
        <Map
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          activeLayers={activeLayers}
        />
      </div>
    </div>
  )
}

export default App