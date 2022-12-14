import { ImSpinner8 } from 'react-icons/im'
import { useStore } from '../../../library'

import '../style.css'

export const LoadingSpinner = () => {
  const { status } = useStore()
  return status === 'loading' ? (
    <div role="alert" aria-label="loading" className="spinner">
      <ImSpinner8 className="spin" />
    </div>
  ) : null
}
