import React, { createContext } from 'react'

export const TeamDataContext = createContext()

const TeamDataProvider = ({children}) => {
    const teamInfo = {
        "homeTeam": {
          "name": "Paris Saint-Germain"
        },
        "awayTeam": {
          "name": "Arsenal"
        }
      }

  return (
    <TeamDataContext.Provider value={teamInfo}>
        {children}
    </TeamDataContext.Provider>
  )
}

export default TeamDataProvider