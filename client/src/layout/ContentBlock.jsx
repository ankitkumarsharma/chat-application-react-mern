const ContentBlock = ({children, bgColor="bg-red-100", width="w-96", pad="p-3"}) =>{
    return <div className={`flex flex-col items-center justify-center shadow-md ${width} mx-auto ${bgColor} rounded-lg ${pad}`}>
        {children}
    </div>
}

export default ContentBlock;