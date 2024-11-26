import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Components } from './examples/Components.tsx'
import { NotFound } from './NotFound.tsx'
import { Example } from './examples/Example.tsx'
import { Jsx } from './examples/Jsx.tsx'
import { Props } from './examples/Props.tsx'
import { ConditionalRendering } from './examples/ConditionalRendering.tsx'
import { ListRendering } from './examples/LIstRendering.tsx'
import { HandlingEvents } from './examples/HandlingEvents.tsx'
import { State } from './examples/State.tsx'
import { Inputs } from './examples/Inputs.tsx'
import { Context } from './examples/Context.tsx'
import { Effects } from './examples/Effects.tsx'
import { Refs } from './examples/Refs.tsx'
import { CustomHooks } from './examples/CustomHooks.tsx'
import { ThinkingInReact } from './examples/ThinkingInReact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="examples" element={<Example />}>
          <Route path="components" element={<Components />} />
          <Route path="jsx" element={<Jsx />} />
          <Route path="props" element={<Props />} />
          <Route path="conditional" element={<ConditionalRendering />} />
          <Route path="lists" element={<ListRendering />} />
          <Route path="events" element={<HandlingEvents />} />
          <Route path="state" element={<State />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="context" element={<Context />} />
          <Route path="effects" element={<Effects />} />
          <Route path="refs" element={<Refs />} />
          <Route path="custom" element={<CustomHooks />} />
          <Route path="thinking" element={<ThinkingInReact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
