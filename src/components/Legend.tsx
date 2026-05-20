type Props = {
  activeLayers: {
    transport: boolean
    housing: boolean
    environment: boolean
    infrastructure: boolean
  }
  setActiveLayers: React.Dispatch<
    React.SetStateAction<Props['activeLayers']>
  >
}

const layerConfig = [
  { key: 'transport', label: 'Transport', color: '#60a5fa' },
  { key: 'housing', label: 'Housing', color: '#fb923c' },
  { key: 'environment', label: 'Environment', color: '#4ade80' },
  { key: 'infrastructure', label: 'Infrastructure', color: '#c084fc' },
] as const

export default function Legend({
  activeLayers,
  setActiveLayers,
}: Props) {
  return (
    <div className="absolute bottom-4 left-4 w-56 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 backdrop-blur">
      <h3 className="mb-2 text-sm font-semibold text-white">
        Layers
      </h3>

      <div className="space-y-2">
        {layerConfig.map((layer) => {
          const isActive =
            activeLayers[layer.key as keyof typeof activeLayers]

          return (
            <button
              key={layer.key}
              onClick={() =>
                setActiveLayers((prev) => ({
                  ...prev,
                  [layer.key]: !prev[layer.key as keyof typeof prev],
                }))
              }
              className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-sm hover:bg-zinc-800"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                <span className="text-zinc-200">
                  {layer.label}
                </span>
              </div>

              <div
                className={`h-3 w-3 rounded-sm border ${
                  isActive
                    ? 'bg-white border-white'
                    : 'border-zinc-600'
                }`}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}