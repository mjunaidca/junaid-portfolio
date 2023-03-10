
const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full container px-4 sm:px-8 md:px-8 xl:px-20 '>
                {children}
            </div>
        </div>
    )
}

export default Wrapper