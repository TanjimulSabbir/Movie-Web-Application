export default function Toggle({ data, type }) {
    return (
        <div className="flex items-center space-x-4 my-5 text-black">
            <h1 className="font-bold">{type}</h1>
            <div className="flex items-center justify-between py-1 border-2 border-black rounded-3xl">
                {data?.map(item => (<p key={item.title} className="px-4 text-black">{item.title}</p>))}
            </div>
        </div>
    )
}
