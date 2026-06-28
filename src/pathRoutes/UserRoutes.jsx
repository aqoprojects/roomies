
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


export const handleUserAccountSettingRoute = ({navigate, username}) => {
  navigate(`/${username}/settings/account`)
}


export const handleUserNotificationgRoute = (navigate) => {
  navigate(`/notification`)
}
