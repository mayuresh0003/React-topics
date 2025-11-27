import { createBrowserRouter } from "react-router-dom";
import AppLayout from './layouts/app-layout';
import UseStateHook from './components/use-state-hook';
import UseEffectHook from './components/use-effect-hook';
import UseRefHook from './components/use-ref-hook';
import UseContextHook from './components/use-context-hook';
import UseReducerHook from './components/use-reducer-hook';
import UseMemoAndCallbackHook from './components/use-memo-and-callback-hook';
import UseImperativeHandleHook from './components/use-imperative-handle-hook';
import Counter from './custom-hooks/counter';
import PostList from './custom-hooks/post-list';
import DebouncedInput from './custom-hooks/debounced-input';
import CounterClass from './components/classBase-component';
import CounterFunction from './components/functional-component';
import Lifecyclemethod from './components/lifecycle-method';
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "functional", element: <CounterFunction /> },
      { path: "class", element: <CounterClass /> },
      { path: "lifecycle", element: <Lifecyclemethod /> },
      { path: "hooks/useState", element: <UseStateHook /> },
      { path: "hooks/useEffect", element: <UseEffectHook /> },
      { path: "hooks/useRef", element: <UseRefHook /> },
      { path: "hooks/useContext", element: <UseContextHook /> },
      { path: "hooks/useReducer", element: <UseReducerHook /> },
      { path: "hooks/useMemoAndCallback", element: <UseMemoAndCallbackHook /> },
      { path: "hooks/useImperativeHandle", element: <UseImperativeHandleHook /> },
      { path: "custom/counter", element: <Counter /> },
      { path: "custom/post-list", element: <PostList /> },
      { path: "custom/debounced-input", element: <DebouncedInput /> },
    ],
  },
]);

export default router;