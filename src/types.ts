export interface Content {
    currentPath: string
    previousPath: string
    state?: any
};

export type Listener ={ 
    id:number, 
    match:Function|string|RegExp, 
    onBeforeEnter(el: HTMLElement, content: string):void, 
    //onEnter(content: string):void, 
    onEnter(el: HTMLElement,content:string):void, 
    //onLeave(content: string):void 
    onLeave(el: HTMLElement, content: string):void
};

// export type myRouter= {
//     on(match:Function|string|RegExp , onBeforeEnter:(content: string)=>void, onEnter:(content: string)=>void, onLeave):Listener[],
//     go(url:string, state?:any):void
// };