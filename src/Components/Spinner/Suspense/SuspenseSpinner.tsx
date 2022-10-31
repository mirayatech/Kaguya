import { ImSpinner8 } from 'react-icons/im'

import '../style.css'

export const SuspenseSpinner = () => {
  return (
    <div role="alert" aria-label="loading" className="spinner">
      <ImSpinner8 className="spin" />
    </div>
  )
}
