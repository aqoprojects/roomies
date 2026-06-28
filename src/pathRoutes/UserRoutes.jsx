
export const handleProfileRoute = ({navigate, username}) => {
  navigate(`/${username}`)
}

export const handleUserPostRoute = ({navigate, username}) => {
  navigate(`/${username}`)
}

export const handleUserSavedPostRoute = ({navigate, username}) => {
  navigate(`/${username}/saved`)
}


export const handleUserSettingsRoute = ({navigate, username}) => {
  navigate(`/${username}/settings`)
}