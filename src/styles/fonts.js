const calcRem = size => `${size / 16}rem`

const fontSizes = {
	xxxsmall: calcRem(8),
	xxsmall: calcRem(10),
	xsmall: calcRem(12),
	small: calcRem(14),
	base: calcRem(16),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(24),
	xxxl: calcRem(28),
	big: calcRem(32),
	subTitleSize: calcRem(36),
	titleSize: calcRem(42)
}

const deviceSizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	tabletL: '1024px',
	NoteBook: '1440px'
}

const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
	NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`
}

const theme = {
	fontSizes,
	deviceSizes,
	device
}

export default theme
