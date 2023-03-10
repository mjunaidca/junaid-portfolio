
interface Props {
    text: string
}

const Heading2 = ({ text }: Props) => {
    return (
        <div className="font-extrabold text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-grey-dark pt-10 sm:pt-24 lg:pt-36 pb-6 sm:pb-10 lg:pb-14  ">
            {text}
        </div>
    )
}

export default Heading2