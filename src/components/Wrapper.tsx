
const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-5xl'>
                {children}
            </div>
        </div>
    )
}

export default Wrapper