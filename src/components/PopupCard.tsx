import type { Location } from '../types/location'

type Props = {
  location: Location
}

function PopupCard({ location }: Props) {
  return (
    <div className="min-w-50 p-1 text-zinc-900">
      <h2 className="text-lg font-bold">
        {location.name}
      </h2>

      <p className="mt-2 text-sm">
        {location.description}
      </p>
    </div>
  )
}

export default PopupCard