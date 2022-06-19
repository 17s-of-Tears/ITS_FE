import { useCallback, useState } from 'react'

const useToggle = defaultValue => {
	const [value, setValue] = useState(defaultValue)
	const onToggleValue = useCallback(() => setValue(prev => !prev), [])

	return [value, onToggleValue, setValue]
}

export default useToggle
