export const Previous = ({ props }) => {
    
   return (
     <svg 
    {...props}
    className="w-4 h-4 text-white dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
   )
}
export const Next = ({ props }) => {
    return (
        <svg
            {...props}
            className="w-4 h-4 text-white dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
    

    )
}

export const HorizontalSpacer = ({small}) => {
    return (
        <div className="flex flex-row justify-center w-full text-center"><div className={`bg-gradient-to-r from-black via-[#B7B7B7] to-transparent ${small? 'w-1/2' : 'w-full'}  h-[2px] opacity-40`} ></div></div>
    )
}

export const TinyLoading = () => {
    return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}