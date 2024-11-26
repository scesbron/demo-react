import { useEffect, useState } from 'react'

export function CustomHooks() {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className="pl-4">
      <ul className="list-disc">
        <li>On peut utiliser les hooks pour partager du code commun</li>
        <li>Vous êtes actuellement {isOnline ? 'online' : 'offline'}</li>
      </ul>
    </div>
  )
}
