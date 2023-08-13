interface Props {
  ghost?: boolean
  children: string
}

const getButtonStyle = (ghost: boolean | undefined) => {
  if (ghost)
    return 'border-primary text-primary hover:border-primary-hover hover:text-primary-hover'

  return 'text-white bg-primary border-primary hover:bg-primary-hover hover:border-primary-hover'
}

export const Button = ({ ghost, children }: Props) => {
  const buttonStyle = getButtonStyle(ghost)

  const animateStyle =
    'shadow-[0_4px_12px_rgba(24,144,255,0.4)] transition-all hover:-translate-y-[4px]'

  return (
    <button
      className={`${buttonStyle} ${animateStyle} font-semibold border h-10 px-4 rounded-3xl max-w-[110px] w-full`}
    >
      {children}
    </button>
  )
}
