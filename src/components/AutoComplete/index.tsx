/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useCallback } from "react"
import styled from "styled-components"
import { searchLocation } from "../../api/location"
import debounce from "../../utils/debounce"

function AutoComplete() {
	const searchRef = useRef(null)
	const [active, setActive] = useState(false)
	const [data, setData] = useState([])
	const [value, setValue] = useState("")

	// A Callback memoized function for debounce delay the API call
	const getLocations = useCallback(
		debounce((query) => {
			;(async () => {
				const result = await searchLocation(query)
				if (result) {
					setData([...result])
				}
			})()
		}, 300),
		[]
	)

	// To enable focus on the Drop down list and add onClick listener
	const onFocus = useCallback(() => {
		setActive(true)
		window.addEventListener("click", onClick)
	}, [])

	// To remove focus from the drop down list and to hide it
	const onBlur = () => {
		return setTimeout(() => {
			setActive(false)
		}, 100)
	}

	// To check click focus out, remove the onClick listener and hide the drowp down list.
	const onClick = useCallback((event) => {
		if (searchRef?.current && !searchRef?.current?.contains(event.target)) {
			setActive(false)
			window.removeEventListener("click", onClick)
		}
	}, [])

	const handleChange = (e) => {
		setValue(e.target.value)
		getLocations(e.target.value)
	}

	const onLocationSelect = (formatted) => setValue(formatted)

	// TODO: NEED TO ADDED NAVIGATION THROUGH ARROW KEYS ON LIST.
	return (
		<div style={{ position: "relative", maxWidth: 500, margin: "0 auto" }}>
			<Input
				autoComplete="off"
				placeholder="Search postcode..."
				aria-label="Search postcode"
				onChange={handleChange}
				onFocus={onFocus}
				onBlur={onBlur}
				value={value}
				style={{ backgroundColor: "#fff", borderRadius: 4, border: "2px solid #000" }}
			/>
			{active && (
				<>
					{data?.length ? (
						<UL>
							{data?.map(({ id, formatted }) => (
								<LI key={id} onClick={() => onLocationSelect(formatted)}>
									{value ? (
										<span
											dangerouslySetInnerHTML={{
												__html: formatted.replace(new RegExp(value, "gi"), (match) => `<mark>${match}</mark>`),
											}}
										/>
									) : (
										<>{formatted}</>
									)}
								</LI>
							))}
						</UL>
					) : (
						<UL>
							<LI>No location found!</LI>
						</UL>
					)}
				</>
			)}
		</div>
	)
}

export default AutoComplete

const Input = styled.input`
	width: 100%;
	font-size: 20px;
	padding: 20px;
`

const UL = styled.ul`
	list-style: none;
	overflow: auto;
	margin: 9px 0 0;
	padding: 0;
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	z-index: 2;
	max-height: 200px;
	background: white;
	text-align: center;
`

const LI = styled.li`
	color: #636e95;
	padding: 10px;
	cursor: pointer;
	> a {
		position: relative;
		font-size: 13px;
		font-weight: 400;
		padding-left: 10px;
		bottom: 5px;
	}
	:hover {
		background-color: #f4faff;
	}
`
