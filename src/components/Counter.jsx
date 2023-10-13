import { createSignal } from 'solid-js'

const initialValue = 0
const newValue = 1

export default function Counter() {
	const [getValue, setValue] = createSignal(initialValue)
	setValue(newValue)
	console.log(getValue()) // getValue() == 1

	return (
    <>
      Value: {getValue()}
    </>
  )
}