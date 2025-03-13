const Button = ({ text, onClick, loading }) => {
	return (
		<button
			className={`bg-[#EB0237] px-8 py-2 rounded-sm cursor-pointer duration-200 flex items-center justify-center font-bold ${
				loading
					? 'bg-[#701328] cursor-not-allowed opacity-50 pointer-events-none'
					: 'active:bg-[#A01131]'
			}`}
			onClick={loading ? null : onClick}
			disabled={loading}
		>
			<div className='mr-2'>{text}</div>

			<img
				src='/Refresh.svg'
				alt='reload'
				className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`}
			/>
		</button>
	)
}

export default Button
