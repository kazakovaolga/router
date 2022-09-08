import { Listener} from "./types"

// IMPLEMENTATION
export function Router() {
  let listeners: Listener[] = [];
  let currentPath: string = location.pathname;
  let previousPath: string | null = null;

  const isMatch = (match: Function | string, path: string | null) =>
    (match instanceof RegExp && match.test(path as string)) ||
    (typeof match === "function" && match(path)) ||
    (typeof match === "string" && match === path);

  const handleListener = async({ match, onBeforeEnter, onEnter, onLeave }) => {
    const args = { currentPath, previousPath, state: history.state };

    onBeforeEnter && await onBeforeEnter(args);
    onEnter && isMatch(match, currentPath) && await onEnter(args);
    onLeave && isMatch(match, previousPath) && await onLeave(args);    
  };

  const handleAllListeners = () => listeners.forEach(handleListener);

  const generateId = () => {
    const getRandomNumber = () =>
      Math.floor(Math.random() * listeners.length * 1000);
    const doesExist = (id: number) => listeners.find((listener) => listener[id] === id);

    let id = getRandomNumber();
    while (doesExist(id)) {
      id = getRandomNumber();
    }
    return id;
  };

  const on = (match: Function | string | RegExp, onBeforeEnter, onEnter, onLeave) => {
    const id = generateId();
    const listener = { id, match, onBeforeEnter, onEnter, onLeave };
    listeners.push(listener);
    handleListener(listener);

    return () => {
      return listeners = listeners.filter((listener) => listener[id] !== id);
    };
  };

  const go = (url: string, state?: any) => {
    previousPath = currentPath;
    history.pushState(state, url, url);
    currentPath = location.pathname;
    handleAllListeners();
  };

  window.addEventListener("popstate", handleAllListeners);
  return { on, go };
}
