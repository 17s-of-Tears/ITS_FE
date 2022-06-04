import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;

	.modal {
		&-background {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.75);
		}

		&-content {
			margin-top: 150px;
			z-index: 12;
		}
	}
`

const useModal = () => {
	const [modalOpened, setModalOpened] = useState(false)

	const onModalEvent = useCallback(isModal => () => setModalOpened(isModal), [])

	const ModalPortal = ({ children }) => {
		const ref = useRef(null)
		const [mounted, setMounted] = useState(false)

		useEffect(() => {
			setMounted(true)
			if (document) {
				const dom = document.querySelector('#root-modal')
				ref.current = dom
			}
		}, [])

		if (ref.current && mounted && modalOpened) {
			return createPortal(
				<Container>
					<div
						className="modal-background"
						role="presentation"
						onClick={onModalEvent(false)}
					/>
					<div className="modal-content">{children}</div>
				</Container>,
				ref.current
			)
		}
		return null
	}
	return {
		onOpenModal: onModalEvent(true),
		onCloseModal: onModalEvent(false),
		ModalPortal
	}
}

export default useModal
