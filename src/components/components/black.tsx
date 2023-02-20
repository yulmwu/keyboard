import { KeyProps, KeyText } from '..'

export default (props: KeyProps) => {
    return (
        <div data-note={props.note} className='key var-width-2-5vw bg-black black'>
            <KeyText>{props.text ?? props.note}</KeyText>
        </div>
    )
}
