import { useState } from 'react'

import Map from './components/Map'

import { locations } from './data/locations'

import type { Location } from './types/location'

function App() {
  const [selectedLocation, setSelectedLocation] =
    useState<Location | null>(null)

  const [activeCategory, setActiveCategory] =
    useState<string>('all')

  // FILTERED DATA
  const filteredLocations =
    activeCategory === 'all'
      ? locations
      : locations.filter(
          (location) =>
            location.category === activeCategory
        )

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* SIDEBAR */}
      <aside className="w-80 border-r border-zinc-800 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold">
          Smart Stockholm Map
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          GIS + React portfolio project
        </p>

        {/* FILTER BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'all',
            'education',
            'transport',
            'nature',
            'technology',
            'culture',
            'entertainment',
            'other',
          ].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setSelectedLocation(null)
              }}
              className={`rounded-lg px-3 py-1 text-sm transition
                ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* LOCATION LIST */}
        <div className="mt-8 space-y-3">
          {filteredLocations.map((location) => {
            const isSelected =
              selectedLocation?.id === location.id

            return (
              <div
                key={location.id}
                onClick={() =>
                  setSelectedLocation(location)
                }
                className={`cursor-pointer rounded-xl border p-4 transition
                  ${
                    isSelected
                      ? 'border-blue-500 bg-zinc-800'
                      : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800'
                  }
                `}
              >
                <h2 className="font-semibold">
                  {location.name}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {location.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* RESET */}
        <button
          onClick={() => {
            setSelectedLocation(null)
            setActiveCategory('all')
          }}
          className="mt-6 w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2 text-sm hover:bg-zinc-800"
        >
          Reset view
        </button>
      </aside>

      {/* MAP */}
      <main className="flex-1">
        <Map
          selectedLocation={selectedLocation}
          locations={filteredLocations}
        />
      </main>
    </div>
  )
}

export default App