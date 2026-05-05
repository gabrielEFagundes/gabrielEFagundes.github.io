export default function Window({id, activeId, children}: {id: string, activeId: string, children: any}){
    if(activeId !== id) return null;
    return(
        <div>
            {children}
        </div>
    )
}