const checkIsNavigationSupported = () => {
    return Boolean(document.startViewTransition)
}

export const startViewTransition = () => {
    if(document.startViewTransition) return
        window.navigation.addEventListener('navigate', (event) => {
            const toUrl = new URL(event.destination.url)
    
            
            
            
            event.intercept({
                async handler () {
                    const response = await fetch(toUrl.pathname)
                    const text= await response.text()
                    const data =text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
                    console.log(data)
    
                    document.startViewTransition(() => {
                    document.getElementById('content').innerHTML = data
                         
                    })
                }
            })
        })
    }