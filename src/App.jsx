import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  // why are we passing in setPuppies?? why do we need if we aren't using?
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  return (
    <>
      <div className='App'>
        {
          puppies.map((puppy) => {
            return <p onClick={() => { setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        {
          featPupId && (
            // use bootstrap components to style???
          <div>
            <h2 className='puppy-header'>{featuredPup.name}</h2>
            
              <p className='description'>Age: {featuredPup.age}</p>
              <p className='description'>Email: {featuredPup.email}</p>
            
          </div>
          )}
      </div>
    </>
  )
}

export default App
