import Header from "./Header";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from './data.js'

function App() {
  const [selectedTab, setSelectedTab] = useState();
  function handleSelect(selectedButton){
    setSelectedTab(selectedButton);
    console.log(selectedButton)
  }
  return (
    <div>
    <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem} /> )}
          </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTab === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
            {!selectedTab ? <p>Please select a topic</p> : (<div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre><code>{EXAMPLES[selectedTab].code}</code></pre>
            </div>)}
        </section>
      </main>
    </div>
  )
}

export default App;
