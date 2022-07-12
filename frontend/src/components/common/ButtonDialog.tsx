
interface ButtonProps {
  label?: string;
  target?: string;
}

export const ButtonDialog = ({label, target}: ButtonProps) => {
  return (
    <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#${target}`}>
      {label}
    </button>
  )
}