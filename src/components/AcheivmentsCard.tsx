

interface Props {
    title: string,
    brief: string,
    points: string[],
    gradient?: string,
}

const AcheivmentsCard = ({ title, brief, points, gradient }: Props) => {

    return (
        <div className={`flex pb-3 pl-4 flex-col border shadow-md h-full h-128`}>
            <div className={`flex px-3 py-6 -m-1 flex-col ${gradient} shadow-md h-full h-128`}>

                <div className="flex font-bold text-2xl sm:text-2xl md:text-2xl 2xl:text-3xl justify-between">
                    {title}
                </div>
                <div className="text-lg md:text-base lg:text-lg text-grey-dark pt-2 ">
                    {brief}
                </div>
                <ul className="list-disc  list-inside text-lg md:text-base lg:text-lg text-grey-dark underline pt-2">
                    {
                        points.map((el: string) => (
                            <li key='el' className="mt-3">{el}  </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default AcheivmentsCard;