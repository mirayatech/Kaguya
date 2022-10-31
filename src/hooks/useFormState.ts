import { useState } from 'react'

export const useFormState = <InitialState extends object>(
  initialState: InitialState
) => {
  const [formState, setFormState] = useState<InitialState>(initialState)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }

  return { formState, setFormState, handleChange }
}
