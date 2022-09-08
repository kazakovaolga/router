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