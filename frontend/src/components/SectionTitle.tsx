export function SectionTitle({title, description}: {title: string, description: string}) {
    return <>
        <h1 className="text-4xl font-bold font-serif">{title.toUpperCase()}</h1>
        <span
            className="mt-2 mb-12 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent font-semibold">
            {description}
            </span>
    </>;
}